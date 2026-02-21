"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puertaAbierta_1 = __importDefault(require("./puertaAbierta"));
const puertaBloqueada_1 = __importDefault(require("./puertaBloqueada"));
class puertaCerrada {
    puerta;
    constructor(puerta) {
        this.puerta = puerta;
    }
    abrir() {
        console.log("abriendo la puerta...");
        this.puerta.setEstado(new puertaAbierta_1.default(this.puerta));
    }
    cerrar() {
        console.log("La puerta ya está cerrada.");
    }
    bloquear() {
        console.log("Bloqueando la puerta...");
        this.puerta.setEstado(new puertaBloqueada_1.default(this.puerta));
    }
    desbloquear() {
        console.log("desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta_1.default(this.puerta));
    }
}
exports.default = puertaCerrada;
//# sourceMappingURL=puertaCerrada.js.map