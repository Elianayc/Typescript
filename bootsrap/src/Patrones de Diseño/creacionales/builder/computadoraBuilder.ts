import computadora from "./computadora";
import iBuilderComputadora from "./iBuilderComputadora";


export default class computadoraGamerBuilder implements iBuilderComputadora {
    private computadora: computadora;

    constructor() {
        this.computadora = new computadora();
    }

    resetear(): void {
        this.computadora = new computadora();
    }
    agregarProcesador(): void {
        this.computadora.agregarParte("AMD Ryzen 9");
    }
    agregarRam(): void {
        this.computadora.agregarParte("16GB RAM");
    }
    agregarAlmacenamiento(): void {
        this.computadora.agregarParte("1TB SSD");
    }
    getResultado(): computadora {
        return this.computadora;
    }
    
}