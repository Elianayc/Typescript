"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoTexto = void 0;
const Documento_1 = require("./Documento");
class DocumentoTexto extends Documento_1.Documento {
    validar() {
        return this.contentIdo.length > 0;
    }
    copiar() {
        return new DocumentoTexto(this.id, this.nombre, this.contentIdo);
    }
}
exports.DocumentoTexto = DocumentoTexto;
//# sourceMappingURL=DocumentoTexto.js.map