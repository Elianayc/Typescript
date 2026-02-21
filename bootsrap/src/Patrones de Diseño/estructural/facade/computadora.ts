import almacenamiento from "./almacenamiento";
import procesador from "./procesador";
import ram from "./ram";

export default class computadora{ 
    private procesador: procesador;
    private ram: ram;
    private almacenamiento: almacenamiento;

    constructor() {
        this.procesador = new procesador();
        this.ram = new ram();
        this.almacenamiento = new almacenamiento();
    }

    public encender(): void {
        console.log("Encendiendo computadora...");
        this.procesador.iniciar();
        this.ram.cargar();
        this.almacenamiento.leerDatos();
        console.log("Computadora encendida.");
    }
}

