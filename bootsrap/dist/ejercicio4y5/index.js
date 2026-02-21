"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cine_1 = require("./Cine");
function main() {
    const cine1 = new Cine_1.Cine();
    cine1.pelicula = "Garfield";
    cine1.horario = "20:00";
    console.log(`${cine1.pelicula} - ${cine1.horario}`);
    const cine2 = new Cine_1.Cine("Titanic", "20:00");
    console.log(cine2.obtenerCartelera());
    cine1.horario = "19:00";
    cine2.pelicula = "Matrix";
    console.log(cine1.obtenerCartelera());
    console.log(cine2.obtenerCartelera());
}
main();
//# sourceMappingURL=index.js.map