import * as THREE from 'three'
import State from 'controls-state'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import WebGLApp from './lib/WebGLApp'
import assets from './lib/AssetManager'
import { addNaturalLight, addScreenshotButton, addSkybox } from './scene/Lighting'
import passVert from './scene/shaders/pass.vert'
import vignetteFrag from './scene/shaders/vignette.frag'
import Box from "./scene/Box";
import WireBox from './scene/WireBox'

window.DEBUG = window.location.search.includes('debug')

// grab our canvas
const canvas = document.querySelector('#app')

// setup the WebGLRenderer
const webgl = new WebGLApp({
  canvas,
  // enable transparency
  alpha: true,
  // set the scene background color
  background: '#000',
  backgroundAlpha: 1,
  // show the fps counter from stats.js
  showFps: window.DEBUG,
  // enable postprocessing
  // ⚠️ Warning! This disables antialiasing for the scene,
  // at least until WebGL2 comes along in Three.js
  postprocessing: true,
  // enable orbit-controls with a z-distance of 5,
  orbitControls: window.DEBUG && { distance: 5 },
  // Add the controls-gui inputs
  controls: {
    angularVelocity: State.Slider(0.5, {
      label: 'Angular Velocity',
      min: 0.1,
      max: 30,
      step: 0.1,
    }),
    viewOffsetX: State.Slider(0.0, {
      label: 'View Offset X',
      min: -0.5,
      max: 0.5,
      step: 0.01
    }),
    viewOffsetY: State.Slider(0.0, {
      label: 'View Offset Y',
      min: -0.5,
      max: 0.5,
      step: 0.01
    }),
    viewOffsetZ: State.Slider(0.3, {
      label: 'View Offset Z',
      min: 0.01,
      max: 1,
      step: 0.01
    })
  },
  hideControls: !window.DEBUG,
  // enable Cannon.js
  // world: new CANNON.World(),
  // enable Tween.js
  // tween: TWEEN,
})

// attach it to the window to inspect in the console
if (window.DEBUG) {
  window.webgl = webgl
}

// hide canvas
webgl.canvas.style.visibility = 'hidden'

// load any queued assets
assets.load({ renderer: webgl.renderer }).then(() => {
  // show canvas
  webgl.canvas.style.visibility = ''

  // move the camera behind,
  // this will be considered only if orbitControls are disabled
  webgl.camera.position.set(0, 0, 0)

  // add any "WebGL components" here...
  // append them to the scene so you can
  // use them from other components easily
  webgl.scene.box = new WireBox(webgl, {width: 1, height: 1, depth: 4, widthSegments: 10, heightSegments: 10, depthSegments: 40, color: 0xffffff})
  webgl.scene.box.position.z = -2;
  webgl.scene.add(webgl.scene.box)

  // lights and other scene related stuff
  addSkybox(webgl);
  addNaturalLight(webgl)

  // postprocessing
  const vignette = new ShaderPass({
    vertexShader: passVert,
    fragmentShader: vignetteFrag,
    uniforms: {
      tDiffuse: { type: 't', value: new THREE.Texture() },
    },
  })
  webgl.composer.addPass(vignette)

  // add the save screenshot button
  if (window.DEBUG) {
    addScreenshotButton(webgl)
  }

  // start animation loop
  webgl.start()
  webgl.draw()

  webgl.onUpdate((dt, time) => {
    let ar = webgl.canvas.height / webgl.canvas.width;
    webgl.camera.setViewOffset(1, ar, -webgl.controls.viewOffsetX, webgl.controls.viewOffsetY, 1, ar);
    webgl.camera.position.setX(webgl.controls.viewOffsetX / 1);
    webgl.camera.position.setY(webgl.controls.viewOffsetY * ar);

    webgl.camera.near = webgl.controls.viewOffsetZ;
    webgl.camera.position.setZ(webgl.controls.viewOffsetZ);
    webgl.camera.fov = THREE.Math.radToDeg(Math.atan(1.0 / (2.0 * webgl.controls.viewOffsetZ)));
  })
})
