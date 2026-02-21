import IestadoPuerta from "./IestadoPuerta";
import puertaCerrada from "./puertaCerrada";

export default class Puerta {
    private estado: IestadoPuerta;

    constructor() {
        // Comienza cerrada
        this.estado = new puertaCerrada(this); // Usar 'this' para pasar la instancia de Puerta
    }

    setEstado(estado: IestadoPuerta): void {
        this.estado = estado;
    }

    abrir() { this.estado.abrir(); }
    cerrar() { this.estado.cerrar(); }
    bloquear() { this.estado.bloquear(); }
    desbloquear() { this.estado.desbloquear(); }
}
