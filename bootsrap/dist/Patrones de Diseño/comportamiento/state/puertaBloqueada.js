"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puertaAbierta_1 = __importDefault(require("./puertaAbierta"));
class puertaBloqueada {
    puerta;
    constructor(puerta) {
        this.puerta = puerta;
    }
    abrir() {
        console.log("La puerta está bloqueada. No se puede abrir.");
    }
    cerrar() {
        console.log("La puerta está bloqueada.");
    }
    bloquear() {
        console.log("La puerta ya está bloqueada.");
    }
    desbloquear() {
        console.log("Desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta_1.default(this.puerta));
    }
}
exports.default = puertaBloqueada;
//# sourceMappingURL=puertaBloqueada.js.map