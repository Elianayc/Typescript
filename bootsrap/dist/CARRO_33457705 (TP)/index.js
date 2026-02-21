"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Documento_1 = require("./Documento");
const Encriptacion_1 = require("./Encriptacion");
const Compresion_1 = require("./Compresion");
function main() {
    const documento = new Documento_1.Documento("Texto de ejemplo", new Encriptacion_1.Encriptacion());
    console.log("Resultado del procesamiento:", documento.procesar());
    documento.setEstrategiaProceso(new Compresion_1.Compresion());
    console.log("Resultado del procesamiento:", documento.procesar());
}
main();
//# sourceMappingURL=index.js.map