import ProductoAbstracto from "./productoAbstracto";

export default class productoConcretoA extends ProductoAbstracto {

    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }

    public mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }

}