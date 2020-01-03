import * as THREE from 'three'
import * as faceapi from 'face-api.js'
import { Point } from 'face-api.js'

export default class FaceTracker extends THREE.Group {
  constructor(webgl, options) {
    super(options)

    this.webgl = webgl
    this.options = options

    this.debugElement = document.getElementById('face-tracker-debug')
    this.webcamVideo = document.getElementById('webcam-video')
    this.webcamCanvas = document.getElementById('webcam-canvas')

    this.webcamVideo.setAttribute('width', window.innerWidth)
    this.webcamVideo.setAttribute('height', window.innerHeight)
  }

  async setup () {
    const webcamStream = await navigator.mediaDevices.getUserMedia({ video: {} })
    this.webcamVideo.srcObject = webcamStream

    await faceapi.loadTinyFaceDetectorModel('/models/tiny_face_detector')
    await faceapi.loadFaceLandmarkTinyModel('/models/face_landmark_68_tiny')

    this.detectorOptions = new faceapi.TinyFaceDetectorOptions()
    this.trackFace()
    this.updateDebug()
  }

  updateDebug() {
    const debug = this.webgl.controls.debugFaceTracker
    this.debugElement.style = debug ? "display: block" : "display: none"

    if (debug) {
      this.debugElement.style = "display: block"
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

        let lEye = detectionWithLandmarksForSize.landmarks.getLeftEye()[3]
        let rEye = detectionWithLandmarksForSize.landmarks.getRightEye()[0]
        let eyesMiddle = new Point(
          0.5 * (lEye.x + rEye.x),
          0.5 * (lEye.y + rEye.y)
        );

        let ctx = this.webcamCanvas.getContext('2d')
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(lEye.x, lEye.y, 5, 5)
        ctx.fillRect(rEye.x, rEye.y, 5, 5)
        ctx.fillRect(eyesMiddle.x, eyesMiddle.y, 10, 10)
      }
    }
    else {
      this.debugElement.style = "display: none"
    }

  }

  async trackFace() {
    this.detection = await faceapi
      .detectSingleFace(this.webcamVideo, this.detectorOptions)
      .withFaceLandmarks(true)

    this.updateDebug()

    window.requestAnimationFrame(this.trackFace.bind(this))
  }
}
