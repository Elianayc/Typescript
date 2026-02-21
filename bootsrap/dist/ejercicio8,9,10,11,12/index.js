"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Guardia_1 = require("./Guardia");
const Visitante_1 = require("./Visitante");
function main() {
    const p1 = new Persona_1.Persona();
    const g1 = new Guardia_1.Guardia();
    const v1 = new Visitante_1.Visitante();
    p1.nombre = "Eliana";
    p1.apellido = "Carro";
    g1.nombre = "Pepe";
    g1.apellido = "Ramirez";
    v1.nombre = "Esteban";
    v1.apellido = "Quito";
    p1.presentarse();
    g1.presentarse();
    v1.dni = 33457705;
    g1.controlarDocumento(v1.dni);
}
main();
//# sourceMappingURL=index.js.map