"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productoAbstracto_1 = __importDefault(require("./productoAbstracto"));
class productoConcretoA extends productoAbstracto_1.default {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}
exports.default = productoConcretoA;
//# sourceMappingURL=productoConcretoA.js.map