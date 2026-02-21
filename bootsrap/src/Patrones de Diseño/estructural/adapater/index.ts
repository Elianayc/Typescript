import adaptadorCuadradoCirculo from "./adaptadorCuadradoCirculo";
import cuadrado from "./formaCuadrada";

const formaCuadrada = new cuadrado();
const adaptador = new adaptadorCuadradoCirculo(formaCuadrada);

console.log( adaptador.rodar() );
//salida esperada: "hola soy una figura que tiene forma cuadrada y me adapto a la forma circular. Estoy rodando como un círculo pero en realidad soy un cuadrado"