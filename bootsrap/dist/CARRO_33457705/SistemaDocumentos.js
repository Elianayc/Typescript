"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDocumentos = void 0;
class SistemaDocumentos {
    documentsActivos = new Map();
    versiones = new Map();
    crearDocument(doc) {
        this.documentsActivos.set(doc.id, doc);
        this.versiones.set(doc.id, [doc.copiar()]);
    }
    editarDocument(id, contentIdp) {
        const doc = this.documentsActivos.get(id);
        if (!doc)
            return false;
        doc.editar(contentIdp);
        this.versiones.get(id).push(doc.copiar());
        return true;
    }
    restaurarVersion(id, nr0Version) {
        const version = this.verVersion(id, nr0Version);
        this.documentsActivos.set(id, version.copiar());
        return version;
    }
    verVersion(id, nr0Version) {
        const historial = this.versiones.get(id);
        if (!historial)
            throw new Error("No existe documento");
        if (nr0Version < 1 || nr0Version > historial.length)
            throw new Error("No existe versión");
        return historial[nr0Version - 1].copiar();
    }
    verUltimas10Versiones(id) {
        const historial = this.versiones.get(id);
        if (!historial)
            return [];
        const start = Math.max(0, historial.length - 10);
        const result = [];
        for (let i = start; i < historial.length; i++) {
            result.push(historial[i].copiar());
        }
        return result;
    }
}
exports.SistemaDocumentos = SistemaDocumentos;
//# sourceMappingURL=SistemaDocumentos.js.map