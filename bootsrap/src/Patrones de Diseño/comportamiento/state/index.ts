import Puerta from "./puerta";

const puerta1 = new Puerta();

console.log("Estado inicial: Puerta cerrada");
console.log("------------------------------");
console.log("Intentando abrir la puerta:");
puerta1.abrir();    // Abre la puerta
console.log("------------------------------");
console.log("Intentando bloquear la puerta:");
puerta1.bloquear(); // Bloquea la puerta
console.log("------------------------------");
console.log("Intentando abrir la puerta bloqueada:");
puerta1.abrir();    // No puede abrirse
console.log("------------------------------");
console.log("Desbloqueando la puerta:");
puerta1.desbloquear(); // Desbloquea la puerta
console.log("------------------------------");
console.log("Cerrando la puerta:");
puerta1.cerrar();  // Cierra la puerta
console.log("------------------------------");
console.log("Bloqueando la puerta cerrada:");
puerta1.bloquear(); // Bloquea la puerta
console.log("------------------------------");
console.log("Intentando desbloquear la puerta:");
puerta1.desbloquear(); // Desbloquea la puerta
console.log("------------------------------");
console.log("Abriendo la puerta:");
puerta1.abrir();    // Abre la puerta
console.log("------------------------------");