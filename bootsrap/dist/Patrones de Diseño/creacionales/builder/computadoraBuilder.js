"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computadora_1 = __importDefault(require("./computadora"));
class computadoraGamerBuilder {
    computadora;
    constructor() {
        this.computadora = new computadora_1.default();
    }
    resetear() {
        this.computadora = new computadora_1.default();
    }
    agregarProcesador() {
        this.computadora.agregarParte("AMD Ryzen 9");
    }
    agregarRam() {
        this.computadora.agregarParte("16GB RAM");
    }
    agregarAlmacenamiento() {
        this.computadora.agregarParte("1TB SSD");
    }
    getResultado() {
        return this.computadora;
    }
}
exports.default = computadoraGamerBuilder;
//# sourceMappingURL=computadoraBuilder.js.map