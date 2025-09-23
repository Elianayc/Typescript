
import { Ninja } from "./Ninja";

function main() {

    const ninja1: Ninja = new Ninja("Karate", "Katana", 200, 100);
    const ninja2: Ninja = new Ninja("Sumo", "Espada", 400, 300);

    ninja1.saltar(5);
    ninja2.saltar(8);

    ninja1.ataque();
    ninja2.ataque();

}

main()
