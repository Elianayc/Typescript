"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
class Robot {
    _numSerie;
    _potenciaBase;
    _sistemaTraccion;
    constructor(ns, pb, st) {
        this._numSerie = ns;
        this._potenciaBase = pb;
        this._sistemaTraccion = st;
    }
    set numSerie(ns) { this._numSerie = ns; }
    set potenciaBase(pb) { this._potenciaBase = pb; }
    set sistemaTraccion(st) { this._sistemaTraccion = st; }
    get numSerie() { return this._numSerie; }
    get potenciaBase() { return this._potenciaBase; }
    get sistemaTraccion() { return this._sistemaTraccion; }
    mostrarDatos() {
        console.log(`\n 
            Número de serie: ${this._numSerie} \n 
            Potencia de tracción final: ${this._potenciaBase} \n
            Tipo de tracción: ${this._sistemaTraccion} \n
            Puede avanzar: ${this._sistemaTraccion} \n`);
    }
}
exports.Robot = Robot;
//# sourceMappingURL=Robot.js.map