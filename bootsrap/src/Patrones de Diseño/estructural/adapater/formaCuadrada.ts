export default class cuadrado {
    private descripcion: string;

    constructor() {
        this.descripcion = "hola soy una figura que tiene forma cuadrada";
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }


}