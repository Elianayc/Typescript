
import { Persona } from "./Persona";

export class Guardia extends Persona {

    public override presentarse(): void {
        super.presentarse();
        console.log("Soy el guardia.");
    }

    public controlarDocumento(dni: number): void {
        console.log(`Adelante, persona con DNI: ${dni}.`);
    }
}