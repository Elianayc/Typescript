import Procesar from "./abstractProcesar";
import documento from "./documento";
export default class comprimir extends Procesar {
    procesarDocumento(documento: documento): void {

        console.log("Comprimiendo documento con nombre " + documento.getNombre() + " y contenido " + documento.getContenido());

    }

}