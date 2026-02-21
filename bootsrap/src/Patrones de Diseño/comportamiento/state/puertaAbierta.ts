import IestadoPuerta from "./IestadoPuerta";
import puerta from "./puerta";
import puertaBloqueada from "./puertaBloqueada";
import puertaCerrada from "./puertaCerrada";

export default class puertaAbierta implements IestadoPuerta {
    private puerta:puerta;

    constructor(puerta:puerta) {
        this.puerta = puerta;
    }
    abrir(): void {
        console.log("La puerta ya está abierta.");
    }
    cerrar(): void {
        console.log("Cerrando la puerta...");
        this.puerta.setEstado(new puertaCerrada(this.puerta));
    }
    bloquear(): void {
        console.log("Bloqueando la puerta...");
        this.puerta.setEstado(new puertaBloqueada(this.puerta));
    }
    desbloquear(): void {
        console.log("Desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta(this.puerta));
    }
}