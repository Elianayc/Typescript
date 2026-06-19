import { SistemaTraccion } from "./SistemaTraccion";

export class RuedaCaucho extends SistemaTraccion {

    constructor() {
        super(
            "Rueda de caucho",
            1,
            100
        );
    }

    public obtenerCaracteristicas(): string {
        return "Cuando se gasta debe reemplazarse.";
    }
}