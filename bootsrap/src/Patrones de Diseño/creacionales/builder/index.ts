import computadoraGamerBuilder from "./computadoraBuilder";
import Director from "./Director";


const computadoraBuilder = new computadoraGamerBuilder();
const director = new Director(computadoraBuilder);
const otroBuilder = new computadoraGamerBuilder();

director.construirComputadora();
const computadoraGamer = director.obtenerComputadora();
console.log("Computadora Gamer:", computadoraGamer.mostrarPartes());

director.setBuilder(otroBuilder);
director.construirComputadora();
const otraComputadoraGamer = director.obtenerComputadora();
console.log("Otra Computadora Gamer:", otraComputadoraGamer.mostrarPartes());
