import Procesar from "./abstractProcesar";
import documento from "./documento";
export default class cliente{

    private documento: documento;
    private formaDeProcesar: Procesar;
    constructor(documento: documento, formaDeProcesar: Procesar) {
        this.documento = documento;
        this.formaDeProcesar = formaDeProcesar;
    }

    public procesarDocumento(): void {
        this.formaDeProcesar.procesarDocumento(this.documento);
    }
    public setFormaDeProcesar(formaDeProcesar: Procesar): void {
        this.formaDeProcesar = formaDeProcesar;
    }
}