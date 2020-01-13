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
import OffCenterCamera from './scene/OffCenterCamera'
import FaceTracker from './scene/FaceTracker'
import Suzanne from './scene/Suzanne'

window.DEBUG = window.location.search.includes('debug')

// grab our canvas
const canvas = document.getElementById('app')

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
    Instructions: {
      instructions: State.Raw(h => h('p', null, `
        Hello! This is just a prototype of a face-tracking camera.
        If this is the first time you are watching this demo,
        please follow the instructions in order to calibrate the
        face-tracking system. When you are finished you can close
        this popup by clicking on "controls".
      `)),
      'Step 1 - Calibrate Face Offset': {
        instructions: State.Raw(h => h('p', null, `
          Enable the calibration markers.
          Keep your face still in front of the green circle,
          then adjust "OffsetX Bias" and "OffsetY Bias" until the
          red circle completely disappears behind the green circle
        `))
      },
      'Step 2 - Calibrate webcam/viewport width': {
        instructions: State.Raw(h => h('p', null, `
          Keep your face still in front of the green square,
          then adjust "Width Bias" until the red square completely
          disappears behind the green square
        `))
      },
      'Step 3 - Calibrate webcam/viewport height': {
        instructions: State.Raw(h => h('p', null, `
          Keep your face still in front of the green triangle,
          then adjust "Height Bias" until the red triangle completely
          disappears behind the green triangle
        `))
      },
      'Step 4 - Calibrate webcam/viewport depth': {
        instructions: State.Raw(h => h('p', null, `
          Keep your face still in front of the green circle,
          then adjust "Depth Bias" until you feel that the depth
          of the box is equal to the width of your screen.
          Disable the calibration markers.
        `))
      }
    },
    enableCalibrationMarkers: false,
    offsetXBias: State.Slider(+localStorage['offsetXBias'] || 0.0, {
      label: 'OffsetX Bias',
      min: 0.00,
      max: 4096.00,
      step: 0.01
    }),
    offsetYBias: State.Slider(+localStorage['offsetYBias'] || 0.0, {
      label: 'OffsetY Bias',
      min: 0.00,
      max: 4096.00,
      step: 0.01
    }),
    widthBias: State.Slider(+localStorage['widthBias'] || 4096.0, {
      label: 'Width Bias',
      min: 1.00,
      max: 4096.00,
      step: 0.01
    }),
    heightBias: State.Slider(+localStorage['heightBias'] || 4096.0, {
      label: 'Height Bias',
      min: 1.00,
      max: 4096.00,
      step: 0.01
    }),
    depthBias: State.Slider(+localStorage['depthBias'] || 1000.0, {
      label: 'Depth Bias',
      min: 1.00,
      max: 1000.00,
      step: 0.01
    }),
    debugFaceTracker: State.Checkbox(false, {
      label: 'Debug Face Tracker'
    }),
    resetCalibration: () => {
      webgl.controls = {}
      localStorage.clear()
      window.location.reload()
    }
  }
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
assets
  .load({ renderer: webgl.renderer })
  .then (() => {
    webgl.scene.faceTracker = new FaceTracker(webgl, {})
    return webgl.scene.faceTracker.setup()
  })
  .then(() => {
    // show canvas
    webgl.canvas.style.visibility = ''

    webgl.scene.add(webgl.scene.faceTracker);

    webgl.scene.offCenterCamera = new OffCenterCamera(webgl, {}, webgl.scene.faceTracker)
    webgl.scene.add(webgl.scene.offCenterCamera);

    webgl.scene.box = new WireBox(webgl, {
      width: 1,
      height: webgl.canvas.clientHeight / webgl.canvas.clientWidth,
      depth: 1,
      widthSegments: 10,
      heightSegments: 10,
      depthSegments: 10,
      color: 0xffffff}
    )
    webgl.scene.box.position.z = -0.5;
    webgl.scene.add(webgl.scene.box)

    webgl.scene.suzanne = new Suzanne(webgl, {})
    webgl.scene.add(webgl.scene.suzanne)

    // lights and other scene related stuff
    addSkybox(webgl);
    addNaturalLight(webgl)

    // add the save screenshot button
    if (window.DEBUG) {
      addScreenshotButton(webgl)
    }

    // start animation loop
    webgl.start()
    webgl.draw()
  })
