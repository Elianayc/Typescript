"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    _nombre;
    _apellido;
    constructor(n, a) {
        this._nombre = n ?? "desconocido";
        this._apellido = a ?? "desconocido";
    }
    set nombre(n) { this._nombre = n; }
    set apellido(a) { this._apellido = a; }
    get nombre() { return this._nombre; }
    get apellido() { return this._apellido; }
    presentarse() {
        console.log(`Nombre: ${this.nombre} - Apellido: ${this.apellido}`);
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map