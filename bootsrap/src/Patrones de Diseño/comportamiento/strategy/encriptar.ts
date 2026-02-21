import Procesar from "./abstractProcesar";
import documento from "./documento";
export default class encriptar extends Procesar {
    procesarDocumento(documento: documento): void {

        console.log("Encriptando documento con nombre " + documento.getNombre() + " y contenido " + documento.getContenido());

    }

}