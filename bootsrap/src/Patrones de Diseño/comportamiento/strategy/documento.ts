export default class documento{
    private nombre: string;
    private contenido: string;
    constructor(nombre: string, contenido: string) {
        this.nombre = nombre;
        this.contenido = contenido;
    }
    getNombre(): string {
        return this.nombre;
    }
    getContenido(): string {
        return this.contenido;
    }
}