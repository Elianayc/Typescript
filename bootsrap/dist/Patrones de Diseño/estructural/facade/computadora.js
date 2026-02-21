"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const almacenamiento_1 = __importDefault(require("./almacenamiento"));
const procesador_1 = __importDefault(require("./procesador"));
const ram_1 = __importDefault(require("./ram"));
class computadora {
    procesador;
    ram;
    almacenamiento;
    constructor() {
        this.procesador = new procesador_1.default();
        this.ram = new ram_1.default();
        this.almacenamiento = new almacenamiento_1.default();
    }
    encender() {
        console.log("Encendiendo computadora...");
        this.procesador.iniciar();
        this.ram.cargar();
        this.almacenamiento.leerDatos();
        console.log("Computadora encendida.");
    }
}
exports.default = computadora;
//# sourceMappingURL=computadora.js.map