"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
class Documento {
    id;
    nombre;
    contentIdo;
    constructor(id, nombre, contentIdo) {
        this.id = id;
        this.nombre = nombre;
        this.contentIdo = contentIdo;
    }
    editar(contentIdo) {
        this.contentIdo = contentIdo;
        return this;
    }
}
exports.Documento = Documento;
//# sourceMappingURL=Documento.js.map