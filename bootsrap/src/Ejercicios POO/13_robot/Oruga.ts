import { SistemaTraccion } from "./SistemaTraccion";

export class Oruga extends SistemaTraccion {

    private _sensorTemperatura: string;

    constructor() {
        super(
            "Oruga",
            3,
            400
        );

        this._sensorTemperatura = "Meke-M0";
    }

    public obtenerCaracteristicas(): string {
        return `Sensor de temperatura: ${this._sensorTemperatura}`;
    }
}