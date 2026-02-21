import IestadoPuerta from "./IestadoPuerta";
import puerta from "./puerta";
import puertaAbierta from "./puertaAbierta";
import puertaBloqueada from "./puertaBloqueada";

export default class puertaCerrada implements IestadoPuerta {
    private puerta:puerta;

    constructor(puerta:puerta) {
        this.puerta = puerta;
    }

    abrir(): void {
       console.log("abriendo la puerta...");
       // Cambiar estado a puerta abierta
       this.puerta.setEstado(new puertaAbierta(this.puerta));
    }

    cerrar(): void {
       console.log("La puerta ya está cerrada.");
    }
    bloquear(): void {
       console.log("Bloqueando la puerta...");
       this.puerta.setEstado(new puertaBloqueada(this.puerta));
    }
    desbloquear(): void {
        console.log("desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta(this.puerta));
    }

}