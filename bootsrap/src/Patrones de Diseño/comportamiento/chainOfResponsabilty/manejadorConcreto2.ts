import Manejador from "./abstractManejador";

// Manejador concreto 2
export default class ManejadorAutorizacion extends Manejador {
  manejar(peticion: string): void {
    if (peticion === "permiso") {
      console.log("🔐 Usuario autorizado.");
    } else {
      super.manejar(peticion);
    }
  }
}