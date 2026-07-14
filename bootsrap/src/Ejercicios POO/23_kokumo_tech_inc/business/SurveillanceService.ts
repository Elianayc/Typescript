import { FlyingGr0n3 } from "../infra/external/FlyingGr0n3";
import { FalderP } from "../infra/external/FalderP";
import { Detection } from "../model/Detection";
import { SurveillanceAdapter } from "../adapter/SurveillanceAdapter";

export class SurveillanceService {

    private adapter = new SurveillanceAdapter();
    public fetchSurveillanceData(): Detection[] {

        const detections: Detection[] = [];
        const gr0n3Objects = FlyingGr0n3.getData(1);

        gr0n3Objects.forEach(object => {
            detections.push(
                this.adapter.convertir(object, 1)
            );

        });

        const falderP = new FalderP();

        falderP.getData().forEach(device => {

            device.detections.forEach(data => {

                detections.push(
                    this.adapter.convertir(data, device.id)
                );

            });

        });

        return detections;
    }


    public printInfo(detections: Detection[]): void {

        detections.forEach(detection => {

            console.log(`
                Dispositivo: ${detection.deviceId}
                Tipo: ${detection.type}
                Tamaño: ${detection.size}
                Observaciones: ${detection.observation}
            `);

        });

    }
}