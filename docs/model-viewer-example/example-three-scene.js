// import {THREE}from './three.module.js'
// import THREE from '../third_party/three.js';
import PrinterBoi from '../printerboi-0.0.1.experimental.js';
import 'https://unpkg.com/@google/model-viewer@0.7.2/dist/model-viewer.js';

function setAttributeBlank(el, attribute) {
    el.setAttribute(attribute, '')
}

let mvEl = document.createElement('model-viewer');
mvEl.setAttribute('src', '../models/gameboy.glb')
mvEl.setAttribute('background-color', '#2EAFAC')
setAttributeBlank(mvEl, 'auto-rotate')
setAttributeBlank(mvEl, 'camera-controls')
setAttributeBlank(mvEl, 'auto-rotate')
document.body.appendChild(mvEl)

function addPrinterButton() {
    let printerButton = document.createElement('button')
    printerButton.classList.add('printerButton')
    printerButton.innerHTML = `<img src="printer.png" alt="printer image"/>`
    document.body.appendChild(printerButton)
    return printerButton
}

let printerButtonEl = addPrinterButton()
printerButtonEl.onclick = () => {
    let domTexture = new THREE.Texture(document.querySelector('model-viewer').shadowRoot.querySelector('canvas'))
    let pb = new PrinterBoi(document.querySelector('model-viewer').shadowRoot.querySelector('canvas'))
    pb.printPopup()
}

