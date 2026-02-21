"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puertaBloqueada_1 = __importDefault(require("./puertaBloqueada"));
const puertaCerrada_1 = __importDefault(require("./puertaCerrada"));
class puertaAbierta {
    puerta;
    constructor(puerta) {
        this.puerta = puerta;
    }
    abrir() {
        console.log("La puerta ya está abierta.");
    }
    cerrar() {
        console.log("Cerrando la puerta...");
        this.puerta.setEstado(new puertaCerrada_1.default(this.puerta));
    }
    bloquear() {
        console.log("Bloqueando la puerta...");
        this.puerta.setEstado(new puertaBloqueada_1.default(this.puerta));
    }
    desbloquear() {
        console.log("Desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta(this.puerta));
    }
}
exports.default = puertaAbierta;
//# sourceMappingURL=puertaAbierta.js.map