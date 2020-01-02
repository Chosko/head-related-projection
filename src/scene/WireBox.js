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

    const geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    const material = new THREE.MeshBasicMaterial({ color, wireframe: true })
    this.box = new THREE.Mesh(geometry, material)

    // add it to the group,
    // later the group will be added to the scene
    this.add(this.box)
  }
}
