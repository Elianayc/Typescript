"use strict";
class Configuracion {
    static instancia;
    constructor() { }
    static getInstance() {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
    mostrarMensaje() {
        console.log("Usando la misma instancia de Configuración.");
    }
}
//# sourceMappingURL=configuration.js.map