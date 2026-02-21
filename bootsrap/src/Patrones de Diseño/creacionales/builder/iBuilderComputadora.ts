import computadora from "./computadora";

export default interface iBuilderComputadora{

    resetear(): void;
    agregarProcesador(): void;
    agregarRam(): void;
    agregarAlmacenamiento(): void;
    getResultado(): computadora;
}