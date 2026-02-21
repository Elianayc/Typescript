"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class adaptadorCuadradoCirculo {
    formaCuadrada;
    constructor(formaCuadrada) {
        this.formaCuadrada = formaCuadrada;
    }
    rodar() {
        return this.formaCuadrada.getDescripcion() + " y me adapto a la forma circular. Estoy rodando como un círculo pero en realidad soy un cuadrado";
    }
}
exports.default = adaptadorCuadradoCirculo;
//# sourceMappingURL=adaptadorCuadradoCirculo.js.map