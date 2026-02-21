"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ninja = void 0;
class Ninja {
    _arteMarcial;
    _arma;
    _fuerza;
    _salto;
    constructor(art, arm, fue, sal) {
        this._arteMarcial = art ?? "desconocido";
        this._arma = arm ?? "desconocido";
        this._fuerza = fue ?? 0;
        this._salto = sal ?? 0;
    }
    set arteMarcial(a) { this._arteMarcial = a; }
    get arteMarcial() { return this._arteMarcial; }
    set arma(a) { this._arma = a; }
    get arma() { return this._arma; }
    set fuerza(f) { this._fuerza = f; }
    get fuerza() { return this._fuerza; }
    set salto(s) { this._salto = s; }
    get salto() { return this._salto; }
    saltar(m) {
        console.log(`${this._salto * m}`);
    }
    ataque() {
        console.log(`${this._arma} - ${this._arteMarcial}`);
    }
}
exports.Ninja = Ninja;
//# sourceMappingURL=Ninja.js.map