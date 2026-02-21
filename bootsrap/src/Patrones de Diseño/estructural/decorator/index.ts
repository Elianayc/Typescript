import agua from "./agua";
import ConJugo from "./conJugo";
import ConSorbete from "./conSorbete";
const agua1 = new agua();

console.log(agua1.beber());
console.log(agua1.servir());

console.log("----- Decorador con jugo -----");

const aguaDecorada = new ConJugo(agua1);
console.log(aguaDecorada.beber());
console.log(aguaDecorada.servir());

console.log("----- Decorador con sorbete -----");

const aguaDecorada2 = new ConSorbete(aguaDecorada);
console.log(aguaDecorada2.beber()); //salida esperada "Bebiendo agua con sorbete" pero si se usa con jugo "Bebiendo agua con jugo con sorbete"
console.log(aguaDecorada2.servir());   

//analogia con agua parecido a una matrioska
//agua dentro de agua con jugo dentro de agua con jugo y sorbete
