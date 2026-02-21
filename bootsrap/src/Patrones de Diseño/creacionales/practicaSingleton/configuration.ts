// Solo se puede crear UNA instancia de esta clase
class Configuracion {
  private static instancia: Configuracion; // almacena la única instancia
  private constructor() {} // evita crear objetos con "new"

  static getInstance(): Configuracion {
    // si no existe, la crea
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    // si ya existe, devuelve la misma
    return Configuracion.instancia;
  }

  mostrarMensaje() {
    console.log("Usando la misma instancia de Configuración.");
  }
}