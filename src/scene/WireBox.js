import * as THREE from 'three'

export default class WireBox extends THREE.Group {
  /**
   *
   * @param {WebGLApp} webgl
   * @param {{width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number, color: number}} options
   */
  constructor(webgl, options) {
    super(options)

    this.webgl = webgl
    this.options = options

    const {
      width = 1,
      height = 1,
      depth = 1,
      widthSegments = 1,
      heightSegments = 1,
      depthSegments = 1,
      color = 0xffffff
    } = this.options

    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments),
      new THREE.MeshBasicMaterial({ color: color, wireframe: true })
    )

    this.calibrationMarkers = new THREE.Group();

    this.greenCircle = new THREE.Mesh(
      new THREE.CircleGeometry(0.01, 20, 0, Math.PI * 2.0),
      new THREE.MeshBasicMaterial({color: 0x00ff00 })
    )
    this.greenCircle.position.set (0, 0, depth*0.25)

    this.redCircle = new THREE.Mesh(
      new THREE.CircleGeometry(0.02, 20, 0, Math.PI * 2.0),
      new THREE.MeshBasicMaterial({color: 0xff0000 })
    )
    this.redCircle.position.set (0, 0, -depth*0.5)

    this.greenSquare = new THREE.Mesh(
      new THREE.PlaneGeometry(0.02, 0.02, 1, 1),
      new THREE.MeshBasicMaterial({color: 0x00ff00 })
      )
      this.greenSquare.position.set (-width*0.5, 0, depth*0.25)

    this.redSquare = new THREE.Mesh(
      new THREE.PlaneGeometry(0.02, 0.02, 1, 1),
      new THREE.MeshBasicMaterial({color: 0xff0000 })
    )
    this.redSquare.position.set (-width*0.5, 0, -depth*0.5)

    this.greenDiamond = new THREE.Mesh(
      new THREE.PlaneGeometry(0.02, 0.02, 1, 1),
      new THREE.MeshBasicMaterial({color: 0x00ff00 })
      )
    this.greenDiamond.position.set (0, height*0.5, depth*0.25)
    this.greenDiamond.rotation.set (0, 0, Math.PI * 0.25)

    this.redDiamond = new THREE.Mesh(
      new THREE.PlaneGeometry(0.02, 0.02, 1, 1),
      new THREE.MeshBasicMaterial({color: 0xff0000 })
    )
    this.redDiamond.position.set (0, height*0.5, -depth*0.5)
    this.redDiamond.rotation.set (0, 0, Math.PI * 0.25)

    this.calibrationMarkers.add(this.greenCircle)
    this.calibrationMarkers.add(this.redCircle)
    this.calibrationMarkers.add(this.greenSquare)
    this.calibrationMarkers.add(this.redSquare)
    this.calibrationMarkers.add(this.greenDiamond)
    this.calibrationMarkers.add(this.redDiamond)


    // add it to the group,
    // later the group will be added to the scene
    this.add(this.box)
    this.add(this.calibrationMarkers)
  }

  update(dt, time) {
    this.calibrationMarkers.visible = this.webgl.controls.enableCalibrationMarkers
  }
}
