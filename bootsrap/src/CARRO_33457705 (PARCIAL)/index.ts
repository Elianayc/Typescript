 import { DocumentoTexto } from "./DocumentoTexto";
 import { DocumentoImagen } from "./DocumentoImagen";
 import { SistemaDocumentos } from "./SistemaDocumentos";


function main() {

    // Creo el sistema
    const sistema = new SistemaDocumentos();

    // Creo dos documentos distintos
    const texto = new DocumentoTexto("1", "doc1", "hola");
    const imagen = new DocumentoImagen("2", "img1", "datos", "png", 100, 100);

    // Agrego los documentos al sistema
    sistema.crearDocumento(texto);
    sistema.crearDocumento(imagen);

    // Edito un documento
    sistema.editarDocumento("1", "hola editado");

    // Veo la versión del documento 1
    const v1 = sistema.verVersion("1", 1);

    // Restauro la versión 1 del documento 1
    sistema.restaurarVersion("1", 1);

    // Ver últimas 10 versiones del documento 1
    const ultimas = sistema.verUltimas10Versiones("1");
}

main()