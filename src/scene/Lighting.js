import * as THREE from 'three'
import assets from '../lib/AssetManager'

// preload the environment map
const hdrKey = assets.queue({
  url: 'assets/ouside-afternoon-blurred-hdr.jpg',
  type: 'env-map',
  // equirectangular means it's just one image, projected
  equirectangular: true,
});

export function addSkybox(webgl) {
  // set the background as the hdr
  webgl.scene.background = assets.get(hdrKey).renderTarget
}

// natural hemisphere light from
// https://threejs.org/examples/#webgl_lights_hemisphere
export function addNaturalLight(webgl) {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  hemiLight.color.setHSL(0.6, 1, 0.6)
  hemiLight.groundColor.setHSL(0.095, 1, 0.75)
  hemiLight.position.set(0, 50, 0)
  webgl.scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.color.setHSL(0.1, 1, 0.95)
  dirLight.position.set(3, 5, 1)
  dirLight.position.multiplyScalar(50)
  webgl.scene.add(dirLight)
}

// demo the save screenshot feature
export function addScreenshotButton(webgl) {
  const screenshotButton = document.createElement('div')

  // normally the styles would be in style.css
  screenshotButton.style.position = 'fixed'
  screenshotButton.style.bottom = 0
  screenshotButton.style.right = 0
  screenshotButton.style.background = 'tomato'
  screenshotButton.style.cursor = 'pointer'
  screenshotButton.style.padding = '8px 16px'
  screenshotButton.style.color = 'white'
  screenshotButton.style.fontSize = '24px'

  screenshotButton.textContent = 'Save screenshot'
  document.body.appendChild(screenshotButton)
  screenshotButton.addEventListener('click', webgl.saveScreenshot)
}
