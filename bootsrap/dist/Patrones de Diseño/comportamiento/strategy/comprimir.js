"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractProcesar_1 = __importDefault(require("./abstractProcesar"));
class comprimir extends abstractProcesar_1.default {
    procesarDocumento(documento) {
        console.log("Comprimiendo documento con nombre " + documento.getNombre() + " y contenido " + documento.getContenido());
    }
}
exports.default = comprimir;
//# sourceMappingURL=comprimir.js.map