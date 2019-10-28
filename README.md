✨🖨  PRINTERBOI ✨🖨

![Printerboi screencast](https://media.giphy.com/media/h8fMP2ibxcUPAeN2tC/giphy.gif)

PrinterBoi is a system of modules to print WebGL textures.

## Installation

```
npm i printerboi
```

## Usage

```javascript
import PrinterBoi from 'https://unpkg.com/printerboi@0.0.1/index.js';
/* or:
import PrinterBoi from 'printerboi';
   if you're using it from npm
*/

// ... set up your THREE canvas & stuff
let domTexture = new THREE.Texture(renderer.domElement)
let pb = new PrinterBoi(domTexture)
pb.printPopup()
```

```
⚠️: This API is still very experimental & will soon go from Three to taking in a
WebGL texture so it's compatible with any, or no, 3D web framework!
```

## Miscellaneous
[Gameboy 3D Model](https://poly.google.com/view/dczUnD4aslM)
