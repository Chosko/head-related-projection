import * as THREE from 'three'
import * as faceapi from 'face-api.js'
import { Point } from 'face-api.js'

export default class FaceTracker extends THREE.Group {
  constructor(webgl, options) {
    super(options)

    this.webgl = webgl
    this.options = options

    this.debugElement = document.getElementById('face-tracker')
    this.webcamVideo = document.getElementById('webcam-video')
    this.webcamCanvas = document.getElementById('face-tracker-debug')

    this.webcamVideo.setAttribute('width', this.webgl.canvas.clientWidth)
    this.webcamVideo.setAttribute('height', this.webgl.canvas.clientHeight)
    this.position.setZ(1);
  }

  async setup () {
    const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true })
    this.webcamVideo.srcObject = webcamStream

    await faceapi.loadTinyFaceDetectorModel('/models/tiny_face_detector')
    await faceapi.loadFaceLandmarkTinyModel('/models/face_landmark_68_tiny')

    this.detectorOptions = new faceapi.TinyFaceDetectorOptions()

    this.updateTracking()
  }

  updateDebug() {
    const debug = this.webgl.controls.debugFaceTracker
    this.debugElement.style = debug ? "visibility: visible" : "visibility: hidden"

    if (debug) {
      this.debugElement.style = "visibility: visible"
      this.webcamCanvas.width = this.webcamVideo.width
      this.webcamCanvas.height = this.webcamVideo.height

      if (this.detection){
        // resize the detected boxes and landmarks in case your displayed image has a different size then the original
        const detectionWithLandmarksForSize = faceapi
          .resizeResults(this.detection, {
            width: this.webcamVideo.width,
            height: this.webcamVideo.height
          })

        faceapi.draw.drawDetections(this.webcamCanvas, detectionWithLandmarksForSize)
        faceapi.draw.drawFaceLandmarks(this.webcamCanvas, detectionWithLandmarksForSize)

        let rawData = this.extractDetectionData(detectionWithLandmarksForSize);

        let ctx = this.webcamCanvas.getContext('2d')
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(rawData.eyeLeft.x, rawData.eyeLeft.y, 5, 5)
        ctx.fillRect(rawData.eyeRight.x, rawData.eyeRight.y, 5, 5)
        ctx.fillRect(rawData.eyeMiddle.x, rawData.eyeMiddle.y, 10, 10)
      }
    }
    else {
      this.debugElement.style = "visibility: hidden"
    }
  }

  runDetectionTask() {
    return faceapi
      .detectSingleFace(this.webcamVideo, this.detectorOptions)
      .withFaceLandmarks(true)
  }

  avgLandmark (landmarks) {
    if (landmarks.length == 0)
      return new Point(0, 0);

    let avgX = 0;
    let avgY = 0;

    landmarks.forEach(l => {
      avgX += l.x;
      avgY += l.y;
    });

    avgX /= landmarks.length;
    avgY /= landmarks.length;

    return new Point(avgX, avgY);
  }

  extractDetectionData(detection) {
    let lEye = this.avgLandmark(detection.landmarks.getLeftEye())
    let rEye = this.avgLandmark(detection.landmarks.getRightEye())

    return {
      eyeLeft: lEye,
      eyeRight: rEye,
      eyeMiddle: this.avgLandmark([lEye, rEye]),
      faceArea: detection.detection.box.area
    }
  }

  computeWorldPosition() {
    if (this.detection) {
      localStorage['depthBias'] = this.webgl.controls.depthBias
      localStorage['widthBias'] = this.webgl.controls.widthBias
      localStorage['heightBias'] = this.webgl.controls.heightBias
      localStorage['offsetXBias'] = this.webgl.controls.offsetXBias
      localStorage['offsetYBias'] = this.webgl.controls.offsetYBias

      if (!this.rawDataHistory)
        this.rawDataHistory = []

      this.rawDataHistory.push(this.extractDetectionData(this.detection));
      this.rawDataHistory = this.rawDataHistory.slice(Math.max(this.rawDataHistory.length - 5, 0))

      let faceArea = 0;
      let eyesX = 0;
      let eyesY = 0;

      this.rawDataHistory.forEach(rawData => {
        faceArea += rawData.faceArea;
        eyesX += rawData.eyeMiddle.x;
        eyesY += rawData.eyeMiddle.y;
      });

      faceArea /= this.rawDataHistory.length;
      eyesX /= this.rawDataHistory.length;
      eyesY /= this.rawDataHistory.length;

      eyesX = (-eyesX + this.webgl.controls.offsetXBias) / this.webgl.controls.widthBias
      eyesY = (-eyesY + this.webgl.controls.offsetYBias) / this.webgl.controls.heightBias

      // Depth
      this.position.setZ(this.webgl.controls.depthBias / Math.sqrt(faceArea));
      this.position.setX(eyesX)
      this.position.setY(eyesY)
    }
  }

  async updateTracking() {
    this.detection = await this.runDetectionTask()
    if (this.detection) {
      this.computeWorldPosition()
      this.updateDebug()
    }
    window.requestAnimationFrame(this.updateTracking.bind(this))
  }
}
