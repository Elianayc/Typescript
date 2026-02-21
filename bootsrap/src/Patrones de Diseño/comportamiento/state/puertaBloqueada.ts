import IestadoPuerta from "./IestadoPuerta";
import puerta from "./puerta";
import puertaAbierta from "./puertaAbierta";

export default class puertaBloqueada implements IestadoPuerta {
    private puerta:puerta;

    constructor(puerta:puerta) {
        this.puerta = puerta;
    }
    abrir(): void {
       console.log("La puerta está bloqueada. No se puede abrir.");
    }
    cerrar(): void {
       console.log("La puerta está bloqueada.");
    }
    bloquear(): void {
         console.log("La puerta ya está bloqueada.");
    }
    desbloquear(): void {
        console.log("Desbloqueando la puerta...");
        this.puerta.setEstado(new puertaAbierta(this.puerta));
    }
    
}