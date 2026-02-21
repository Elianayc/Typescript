import Manejador from "./abstractManejador";

// Manejador concreto 1
export default class ManejadorAutenticacion extends Manejador {
  manejar(peticion: string): void {
    if (peticion === "login") {
      console.log("✅ Usuario autenticado.");
    } else {
      super.manejar(peticion); // Llamar al siguiente manejador en la cadena
    }
  }
}