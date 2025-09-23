
import { Persona } from "./Persona";
import { Guardia } from "./Guardia";
import { Visitante } from "./Visitante";


function main() {

    const p1: Persona = new Persona();
    const g1: Guardia = new Guardia();
    const v1: Visitante = new Visitante ();

    p1.nombre = "Eliana";
    p1.apellido = "Carro";

    g1.nombre = "Pepe";
    g1.apellido = "Ramirez";

    v1.nombre = "Esteban";
    v1.apellido = "Quito";

    p1.presentarse();
    g1.presentarse();

    v1.dni = 33457705;
    g1.controlarDocumento(v1.dni);
}

main()
