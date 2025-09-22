
import { Cine } from "./Cine";

function main() {
    const cine1 = new Cine("Titanic", "20:00");
    cine1.setPelicula("Avatar: El Camino del Agua");
    cine1.setHorario("20:30");

    console.log(cine1.getPelicula());
    console.log(cine1.getHorario());
    console.log(cine1.obtenerCartelera());
}

main();


