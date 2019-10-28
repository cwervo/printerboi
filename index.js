export class PrinterBoi {
    constructor(webGLCanvas) {
        this._version = '0.1.2';
        if (webGLCanvas != undefined) this._canvas = webGLCanvas
        this._orientation = 'auto'
        this._margin = '0mm'
        this._autoclose = true
    }
    autoclose(boolean) {
        if (boolean == undefined) return this._autoclose
        this._autoclose = boolean
    }
    margin(marginAmount) {
        if (marginAmount == undefined) return this._marginAmount
        this._margin = marginAmount
    }
    orientation(orientation) {
        if (orientation == undefined) return this._orientation
        this._orientation = orientation
    }
    version() {
        return this._version
    }
    textureToDataURL() {
        return this._canvas.toDataURL()
    }
    generateTitle(){
        const t = new Date();
        return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}-${Math.trunc(performance.now())}`
    }
    printPopup() {
        let popup = window.open();
        // popup.focus(); //required for IE
        popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>printerboi-window-${this.generateTitle()}</title>
        <style>
            img { width: 100%; height: 100%; }
        </style>
        <style type="text/css" media="print">
            @page {
                size: ${this._orientation};
                margin: ${this._margin};
            }
        </style>
        </head>
        <body>
            <img width="100%" height="100%" src="${this.textureToDataURL()}" />
        </body>
        </html>`);
        popup.document.close();

        popup.focus()
        let img = new Image;
        img.src = this.textureToDataURL();
        document.body.appendChild(img)
        // When we re-focus to the popup window after printing
        // close the page
        if (this._autoclose) popup.onfocus = () => popup.close()
        popup.print()
    }
    generateDocument() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>printerboi-window-${this.generateTitle()}</title>
        <style>
            img { width: 100%; height: 100%; }
        </style>
        <style type="text/css" media="print">
            @page {
                size: ${this._orientation};
                margin: ${this._margin};
            }
        </style>
        </head>
        <body>
            <img width="100%" height="100%" src="${this.textureToDataURL()}" />
        </body>
        </html>`
    }
    gcpPrint(gadget) {
        let popup = window.open();
        // popup.focus(); //required for IE
        popup.document.write(this.generateDocument());
        popup.document.close();

        // popup.focus()
        let img = new Image;
        img.src = this.textureToDataURL();
        document.body.appendChild(img)
        // When we re-focus to the popup window after printing
        // close the page
        if (this._autoclose) popup.onfocus = () => popup.close()
        gadget.setPrintDocument("text/html", this.generateTitle(), document.documentElement.innerHTML);
    }
}

export { PrinterBoi as default };
