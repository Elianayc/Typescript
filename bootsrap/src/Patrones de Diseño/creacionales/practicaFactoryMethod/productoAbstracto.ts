export default abstract class ProductoAbstracto {

    nombre: string;
    precio: number;
    
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public abstract mostrarInfo(): void;
    

}