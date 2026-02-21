"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitante = void 0;
const Persona_1 = require("./Persona");
class Visitante extends Persona_1.Persona {
    _dni;
    constructor(n, a, d) {
        super(n, a);
        this._dni = d ?? 0;
    }
    set dni(d) { this._dni = d; }
    get dni() { return this._dni; }
}
exports.Visitante = Visitante;
//# sourceMappingURL=Visitante.js.map