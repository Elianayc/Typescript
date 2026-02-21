import computadora from "./computadora";
import iBuilderComputadora from "./iBuilderComputadora";

export default class Director {

    private builder : iBuilderComputadora;

    constructor(builder: iBuilderComputadora) {
        this.builder = builder;
    }


    construirComputadora(): void {
        this.builder.resetear();
        this.builder.agregarProcesador();
        this.builder.agregarRam();
        this.builder.agregarAlmacenamiento();
    }

    obtenerComputadora(): computadora {
        return this.builder.getResultado();
    }

    setBuilder(builder: iBuilderComputadora): void {
        this.builder = builder;
    }
    
}