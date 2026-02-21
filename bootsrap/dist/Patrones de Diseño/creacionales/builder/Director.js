"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    builder;
    constructor(builder) {
        this.builder = builder;
    }
    construirComputadora() {
        this.builder.resetear();
        this.builder.agregarProcesador();
        this.builder.agregarRam();
        this.builder.agregarAlmacenamiento();
    }
    obtenerComputadora() {
        return this.builder.getResultado();
    }
    setBuilder(builder) {
        this.builder = builder;
    }
}
exports.default = Director;
//# sourceMappingURL=Director.js.map