"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentoTexto_1 = require("./DocumentoTexto");
const DocomentoImagen_1 = require("./DocomentoImagen");
const SistemaDocumentos_1 = require("./SistemaDocumentos");
function main() {
    const sistema = new SistemaDocumentos_1.SistemaDocumentos();
    const texto = new DocumentoTexto_1.DocumentoTexto("1", "doc1", "hola");
    const imagen = new DocomentoImagen_1.DocumentoImagen("2", "img1", "datos", "png", 100, 100);
    sistema.crearDocument(texto);
    sistema.crearDocument(imagen);
    sistema.editarDocument("1", "hola editado");
    const v1 = sistema.verVersion("1", 1);
    sistema.restaurarVersion("1", 1);
    const ultimas = sistema.verUltimas10Versiones("1");
}
main();
//# sourceMappingURL=index.js.map