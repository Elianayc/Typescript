
import { Cine } from "./Cine";

function main() {

    const cine1: Cine = new Cine();
    cine1.pelicula = "Garfield";
    cine1.horario = "20:00";
    console.log(`${cine1.pelicula} - ${cine1.horario}`);

    const cine2: Cine = new Cine("Titanic", "20:00");
    console.log(cine2.obtenerCartelera());

    cine1.horario = "19:00"
    cine2.pelicula = "Matrix"

    console.log(cine1.obtenerCartelera());
    console.log(cine2.obtenerCartelera());

}

main()
