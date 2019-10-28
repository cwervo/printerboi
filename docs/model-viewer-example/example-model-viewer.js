import PB from '../printerboi-dist.js';
import 'https://unpkg.com/@google/model-viewer@0.7.2/dist/model-viewer.js';

let x = new PB;
console.log(x.version())

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
    let pb = new PB(document.querySelector('model-viewer').shadowRoot.querySelector('canvas'))
    pb.printPopup()
}

