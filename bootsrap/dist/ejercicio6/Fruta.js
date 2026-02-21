"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruta = void 0;
class Fruta {
    _color;
    _peso;
    _esEstacional;
    constructor(color, peso, esEstacional) {
        this._color = color ?? "desconocido";
        this._peso = peso ?? 0;
        this._esEstacional = esEstacional ?? false;
    }
    ;
    set color(c) { this._color = c; }
    get color() { return this._color; }
    set peso(p) { this._peso = p; }
    get peso() { return this._peso; }
    set esEstacional(e) { this._esEstacional = e; }
    get esEstacional() { return this._esEstacional; }
    esComestible() {
        return this._peso < 200 && this._esEstacional;
    }
}
exports.Fruta = Fruta;
//# sourceMappingURL=Fruta.js.map