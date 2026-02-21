import factoryFamilia1 from "./factoryFamilia1";
import factoryFamilia2 from "./factoryFamilia2";

const factory1 = new factoryFamilia1();
const factory2 = new factoryFamilia2();

console.log("Creando productos de la Familia 1:");
console.log("-------------------------------");
const productoA1 = factory1.crearProductoA();
const productoB1 = factory1.crearProductoB();

console.log("Creando productos de la Familia 2:");
console.log("-------------------------------");
const productoA2 = factory2.crearProductoA();
const productoB2 = factory2.crearProductoB();


console.log("Fin de la creación de productos.");

console.log("mostrando productos de la Familia 1:");
console.log("-------------------------------");

console.log(productoA1.mostrarInfo());
console.log(productoB1.mostrarInfo());

console.log("mostrando productos de la Familia 2:");
console.log("-------------------------------");
console.log(productoA2.mostrarInfo());
console.log(productoB2.mostrarInfo());