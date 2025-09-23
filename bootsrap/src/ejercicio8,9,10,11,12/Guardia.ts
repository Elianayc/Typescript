
import { Persona } from "./Persona";

export class Guardia extends Persona {

    public override presentarse(): void{
        console.log(`Hola, mi nombre es: ${this.nombre} ${this.apellido} y soy el Guardia.`);
    }

    public controlarDocumento(d: number){
        console.log(`Adelante, persona con DNI: ${d}.`);
    }
}
