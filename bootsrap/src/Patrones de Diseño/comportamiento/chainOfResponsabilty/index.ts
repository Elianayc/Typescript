import ManejadorAutenticacion from "./manejadorConcreto";
import ManejadorAutorizacion from "./manejadorConcreto2";
import ManejadorError from "./manejadorError";

const manejador1 = new ManejadorAutenticacion();
const manejador2 = new ManejadorAutorizacion();
const manejador3 = new ManejadorError();

manejador1.setSiguiente(manejador2)
manejador2.setSiguiente(manejador3);

// Pruebas
console.log("---- Cadena de Responsabilidad ----");
console.log("Prueba 1: Autenticación");
console.log("usamos login")
manejador1.manejar("login");      // ✅ Usuario autenticado.
console.log("-----------------------------------");
console.log("Prueba 2: Autorización");
console.log("usamos permiso")
manejador1.manejar("permiso");    // 🔐 Usuario autorizado
console.log("-----------------------------------");
console.log("Prueba 3: Solicitud desconocida");
console.log("usamos otraPeticion")
manejador1.manejar("otraPeticion"); // ❌ Solicitud desconocida: otraPeticion