"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class presidente {
    _nombre;
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    _apellido;
    get apellido() {
        return this._apellido;
    }
    set apellido(value) {
        this._apellido = value;
    }
    _titulo;
    get titulo() {
        return this._titulo;
    }
    set titulo(value) {
        this._titulo = value;
    }
    static _unicaInstancia;
    static get unicaInstancia() {
        return presidente._unicaInstancia;
    }
    static nuevoPresidente(pNombre, pApellido, pTitulo) {
        presidente._unicaInstancia = new presidente(pNombre, pApellido, pTitulo);
    }
    constructor(pNombre, pApellido, pTitulo) {
        this._nombre = pNombre;
        this._apellido = pApellido;
        this._titulo = pTitulo;
    }
    static presentarse() {
        if (!presidente._unicaInstancia) {
            console.log("No hay presidente aún.");
            return;
        }
        console.log(`Hola, soy ${presidente._unicaInstancia.titulo} ${presidente._unicaInstancia.nombre} ${presidente._unicaInstancia.apellido}, el presidente de la nación.`);
    }
}
exports.default = presidente;
//# sourceMappingURL=singletonProfe.js.map