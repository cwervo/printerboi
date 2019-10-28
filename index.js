export class PrinterBoi {
    constructor(webGLCanvas) {
        this._version = '0.0.2';
        if (webGLCanvas != undefined) this._canvas = webGLCanvas
    }
    version() {
        return this._version
    }
    textureToDataURL() {
        return this._canvas.toDataURL()
    }
    async printPopup() {
        let popup = window.open();
        // popup.focus(); //required for IE
        console.log('hello there')
        popup.document.write(`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title></title> </head> <body>
            <img width="100%" height="100%" src="${this.textureToDataURL()}" />
            </body> </html>`);
        popup.document.close();

        popup.focus()
        let img = new Image;
        img.src = this.textureToDataURL();
        document.body.appendChild(img)
        // When we re-focus to the popup window after printing
        // close the page
        popup.onfocus = () => popup.close()
        popup.print()
    }
}

export { PrinterBoi as default };
