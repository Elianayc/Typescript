"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
class Cine {
    _pelicula;
    _horario;
    constructor(pelicula, horario) {
        if (pelicula && horario) {
            this._pelicula = pelicula;
            this._horario = horario;
        }
        else if (pelicula) {
            this._pelicula = pelicula;
            this._horario = "Sin definir";
        }
        else {
            this._pelicula = "Sin definir";
            this._horario = "Sin definir";
        }
    }
    get pelicula() { return this._pelicula; }
    set pelicula(p) { this._pelicula = p; }
    get horario() { return this._horario; }
    set horario(h) { this._horario = h; }
    obtenerCartelera() {
        return `${this._pelicula} - ${this._horario}`;
    }
}
exports.Cine = Cine;
//# sourceMappingURL=Cine.js.map