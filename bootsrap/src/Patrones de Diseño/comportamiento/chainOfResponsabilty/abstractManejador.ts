// Clase base
export default abstract class Manejador {
  protected siguiente?: Manejador;

  setSiguiente(m: Manejador): Manejador {
    this.siguiente = m;
    return m;
  }

  manejar(peticion: string): void {
    if (this.siguiente) {
      this.siguiente.manejar(peticion); //esto lo usamos en otra clase con super
      
    }
  }
}






