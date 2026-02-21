"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manejador {
    siguiente;
    setSiguiente(m) {
        this.siguiente = m;
        return m;
    }
    manejar(peticion) {
        if (this.siguiente) {
            this.siguiente.manejar(peticion);
        }
    }
}
exports.default = Manejador;
//# sourceMappingURL=abstractManejador.js.map