"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
class Documento {
    contenido;
    estrategiaProceso;
    constructor(contenido, estrategiaProceso) {
        this.contenido = contenido;
        this.estrategiaProceso = estrategiaProceso;
    }
    setEstrategiaProceso(estrategia) {
        this.estrategiaProceso = estrategia;
    }
    procesar() {
        return this.estrategiaProceso.procesar(this.contenido);
    }
}
exports.Documento = Documento;
//# sourceMappingURL=Documento.js.map