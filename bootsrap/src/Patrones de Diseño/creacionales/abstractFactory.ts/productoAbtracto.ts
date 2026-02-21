export default class productoAbtracto {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    public mostrarInfo(): string {
        return "soy el producto:" + this.nombre;
}
}