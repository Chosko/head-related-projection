import * as THREE from 'three'

export default class OffCenterCamera extends THREE.Group {
  constructor(webgl, options, faceTracker) {
    super(options)
    // these can be used also in other methods
    this.webgl = webgl
    this.options = options
    this.faceTracker = faceTracker

    // destructure and default values like you do in React
    const { } = this.options

    this.position.set(faceTracker.position.x, faceTracker.position.y, faceTracker.position.z)
    webgl.camera.position.set(this.position.x, this.position.y, this.position.z)
  }

  update(dt, time) {
    // Aspect ratio
    let ar = window.innerHeight / window.innerWidth

    // View Offset. It's the position of the viewer respect to the middle of the viewport.
    // The coordinates are normalized so that the width of the viewport is 1 unit. Z points towards the viewer.
    let vo = new THREE.Vector3(
      this.faceTracker.position.x,
      this.faceTracker.position.y,
      this.faceTracker.position.z
    )

    // Set the position at viewer's point of view
    this.webgl.camera.position.set(vo.x, vo.y, vo.z) // camera position
    this.position.set(vo.x, vo.y, vo.z)              // this group's position. Useful if we want to nest objects

    // Set the near plane in order to match the viewer's distance from the screen
    this.webgl.camera.near = vo.z + 0.001 // Add a small offset in order to clip the front face of the box

    // Offset camera projection in order to align the view frustum of the camera to the real viewer's one
    this.webgl.camera.setViewOffset(1, ar, -vo.x, vo.y, 1, ar)

    // Set the field of view so that the size of frustum's near face can match exactly the viewport as seen by the viewer
    this.webgl.camera.fov = THREE.Math.radToDeg(Math.atan(0.5 / vo.z))
  }
}
