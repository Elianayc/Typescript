"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cliente {
    documento;
    formaDeProcesar;
    constructor(documento, formaDeProcesar) {
        this.documento = documento;
        this.formaDeProcesar = formaDeProcesar;
    }
    procesarDocumento() {
        this.formaDeProcesar.procesarDocumento(this.documento);
    }
    setFormaDeProcesar(formaDeProcesar) {
        this.formaDeProcesar = formaDeProcesar;
    }
}
exports.default = cliente;
//# sourceMappingURL=cliente.js.map