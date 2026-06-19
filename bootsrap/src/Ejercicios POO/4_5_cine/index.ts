
import { Cine } from "./Cine";

function main() {

    // Crear una instancia de Cine utilizando el constructor sin parámetros
    const cine1: Cine = new Cine();

    // Asignar valores a las propiedades utilizando los setters
    cine1.pelicula = "Garfield";
    cine1.horario = "20:00";

    // Mostrar la cartelera utilizando el método obtenerCartelera
    console.log(`${cine1.pelicula} - ${cine1.horario}`);

    //Crear una instancia de Cine utilizando el constructor con parámetros
    const cine2: Cine = new Cine("Titanic", "20:00");

    //Mostrar la cartelera utilizando el método obtenerCartelera
    console.log(cine2.obtenerCartelera());

    // Modificar las propiedades utilizando los setters
    cine1.horario = "19:00"
    cine2.pelicula = "Matrix"

    //Mostrar la cartelera actualizada utilizando el método obtenerCartelera
    console.log(cine1.obtenerCartelera());
    console.log(cine2.obtenerCartelera());

}

main()
