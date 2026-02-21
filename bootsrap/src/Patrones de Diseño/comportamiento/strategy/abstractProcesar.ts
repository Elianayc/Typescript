
import documento from "./documento";

export default abstract class Procesar {

    abstract procesarDocumento(documento: documento): void;
}