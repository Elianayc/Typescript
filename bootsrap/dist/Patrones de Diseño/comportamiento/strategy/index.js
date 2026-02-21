"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comprimir_1 = __importDefault(require("./comprimir"));
const documento_1 = __importDefault(require("./documento"));
const documento1 = new documento_1.default("Archivo1", "Contenido del archivo 1");
const formaDeProcesar1 = new comprimir_1.default();
console.log("Creando cliente con forma de procesar: Comprimir");
const cliente_1 = __importDefault(require("./cliente"));
const cliente1 = new cliente_1.default(documento1, formaDeProcesar1);
cliente1.procesarDocumento();
const encriptar_1 = __importDefault(require("./encriptar"));
const formaDeProcesar2 = new encriptar_1.default();
console.log("Cambiando forma de procesar a: Encriptar");
cliente1.setFormaDeProcesar(formaDeProcesar2);
cliente1.procesarDocumento();
//# sourceMappingURL=index.js.map