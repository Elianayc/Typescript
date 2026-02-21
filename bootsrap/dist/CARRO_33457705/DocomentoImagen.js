"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoImagen = void 0;
const Documento_1 = require("./Documento");
class DocumentoImagen extends Documento_1.Documento {
    Formato;
    ancho;
    alto;
    constructor(id, nombre, contentIdo, Formato, ancho, alto) {
        super(id, nombre, contentIdo);
        this.Formato = Formato;
        this.ancho = ancho;
        this.alto = alto;
    }
    validar() {
        const formatos = ['png', 'jpg', 'bmp'];
        return formatos.includes(this.Formato) && this.ancho >= 100 && this.alto >= 100;
    }
    copiar() {
        return new DocumentoImagen(this.id, this.nombre, this.contentIdo, this.Formato, this.ancho, this.alto);
    }
}
exports.DocumentoImagen = DocumentoImagen;
//# sourceMappingURL=DocomentoImagen.js.map