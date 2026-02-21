"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puertaCerrada_1 = __importDefault(require("./puertaCerrada"));
class Puerta {
    estado;
    constructor() {
        this.estado = new puertaCerrada_1.default(this);
    }
    setEstado(estado) {
        this.estado = estado;
    }
    abrir() { this.estado.abrir(); }
    cerrar() { this.estado.cerrar(); }
    bloquear() { this.estado.bloquear(); }
    desbloquear() { this.estado.desbloquear(); }
}
exports.default = Puerta;
//# sourceMappingURL=puerta.js.map