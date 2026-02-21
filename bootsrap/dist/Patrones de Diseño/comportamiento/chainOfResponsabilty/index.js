"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manejadorConcreto_1 = __importDefault(require("./manejadorConcreto"));
const manejadorConcreto2_1 = __importDefault(require("./manejadorConcreto2"));
const manejadorError_1 = __importDefault(require("./manejadorError"));
const manejador1 = new manejadorConcreto_1.default();
const manejador2 = new manejadorConcreto2_1.default();
const manejador3 = new manejadorError_1.default();
manejador1.setSiguiente(manejador2);
manejador2.setSiguiente(manejador3);
console.log("---- Cadena de Responsabilidad ----");
console.log("Prueba 1: Autenticación");
console.log("usamos login");
manejador1.manejar("login");
console.log("-----------------------------------");
console.log("Prueba 2: Autorización");
console.log("usamos permiso");
manejador1.manejar("permiso");
console.log("-----------------------------------");
console.log("Prueba 3: Solicitud desconocida");
console.log("usamos otraPeticion");
manejador1.manejar("otraPeticion");
//# sourceMappingURL=index.js.map