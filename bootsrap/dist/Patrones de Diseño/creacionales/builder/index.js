"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computadoraBuilder_1 = __importDefault(require("./computadoraBuilder"));
const Director_1 = __importDefault(require("./Director"));
const computadoraBuilder = new computadoraBuilder_1.default();
const director = new Director_1.default(computadoraBuilder);
const otroBuilder = new computadoraBuilder_1.default();
director.construirComputadora();
const computadoraGamer = director.obtenerComputadora();
console.log("Computadora Gamer:", computadoraGamer.mostrarPartes());
director.setBuilder(otroBuilder);
director.construirComputadora();
const otraComputadoraGamer = director.obtenerComputadora();
console.log("Otra Computadora Gamer:", otraComputadoraGamer.mostrarPartes());
//# sourceMappingURL=index.js.map