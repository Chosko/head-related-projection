import * as THREE from 'three'

// basic three.js component example

export default class Box extends THREE.Group {
  constructor(webgl, options) {
    super(options)
    // these can be used also in other methods
    this.webgl = webgl
    this.options = options

    // destructure and default values like you do in React
    const { color = 0x00ff00 } = this.options

    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
    const material = new THREE.MeshStandardMaterial()

    this.position.setZ(-0.5)
    this.boxes = []

    const count = 5.0
    for (let i = 0; i <= count; i++) {
      for (let j = 0; j <= count; j++) {
        for (let k = 0; k < count; k++) {
          let box = new THREE.Mesh(geometry, material)
          box.position.setX(i / count - 0.5)
          box.position.setY(j / count - 0.5)
          box.position.setZ(k / count - 0.5)
          this.boxes.push(box);
          this.add(box)
        }
      }
    }
  }

  update(dt, time) {
    this.visible = !this.webgl.controls.enableCalibrationMarkers
    let i = 0;
    this.boxes.forEach(box => {
      // box.rotation.x = time - i
      // box.rotation.y = time + i
      // box.rotation.z = time + i
      box.scale.x = Math.abs(Math.sin(time - i))
      box.scale.y = Math.abs(Math.sin(time + i))
      box.scale.z = Math.abs(Math.sin(time + i))
      i++
    });
  }
}
