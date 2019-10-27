export class PrinterBoi {
    constructor(webGLCanvas) {
        console.log(webGLCanvas)
        if (webGLCanvas != undefined) this.canvas = webGLCanvas
    }
    textureToDataURL() {
        console.log('this.image: ', this.image)
        return this.canvas.image.toDataURL()
    }
    printPopup() {
        let popup = window.open();
        // popup.focus(); //required for IE
        console.log('hello there')
        popup.document.write(`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title></title> </head> <body>
            <img width="100%" height="100%" src="${this.textureToDataURL()}" />
            </body> </html>`);
        popup.document.close();
        console.log(popup.document)
        popup.focus()
        {
            let img = new Image;
            img.src = this.textureToDataURL();
            document.body.appendChild(img)
        }
        popup.print();
    }
}

export { PrinterBoi as default };
