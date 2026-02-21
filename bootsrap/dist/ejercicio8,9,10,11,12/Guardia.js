"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardia = void 0;
const Persona_1 = require("./Persona");
class Guardia extends Persona_1.Persona {
    presentarse() {
        console.log(`Hola, mi nombre es: ${this.nombre} ${this.apellido} y soy el Guardia.`);
    }
    controlarDocumento(d) {
        console.log(`Adelante, persona con DNI: ${d}.`);
    }
}
exports.Guardia = Guardia;
//# sourceMappingURL=Guardia.js.map