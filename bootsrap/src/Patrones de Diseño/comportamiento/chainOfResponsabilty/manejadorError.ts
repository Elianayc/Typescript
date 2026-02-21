import Manejador from "./abstractManejador";

// Manejador concreto 3
export default class ManejadorError extends Manejador {
  manejar(peticion: string): void {
    console.log("❌ Solicitud desconocida:", peticion);
  }
}
