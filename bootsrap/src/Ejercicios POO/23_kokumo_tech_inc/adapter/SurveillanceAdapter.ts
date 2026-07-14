import { Detection } from "../model/Detection";
import { Gr0n3Object } from "../model/Gr0n3Object";
import { Perr177Data } from "../model/Perr177Data";
import { FPType } from "../enum/FPType";

export class SurveillanceAdapter {

    public convertir(origen: Gr0n3Object | Perr177Data,deviceId: number): Detection {

        if (origen instanceof Gr0n3Object) {
            return new Detection(
                deviceId,
                origen.type === "human" ? "Humano" : "No humano",
                this.convertirTamaño(origen.size),
                origen.kind
            );
        }

        // Perr177Data
        return new Detection(
            deviceId,
            origen.type === FPType.HUMAN ? "Humano" : "No humano",
            this.convertirTamaño(origen.size),
            origen.gender
        );
    }

    private convertirTamaño(size: string): string {

        switch(size) {
            case "big":
            case "rande":
                return "Grande";

            case "medium":
            case "niranipi":
                return "Mediano";

            case "small":
            case "pichitito":
                return "Pequeño";

            default:
                return size;
        }
    }
}