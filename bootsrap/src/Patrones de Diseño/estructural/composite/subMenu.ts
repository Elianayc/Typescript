import Imenu from "./IMenu";

export default class subMenu implements Imenu {

    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mostrarMenu(): void {
        console.log(`Submenú: ${this.nombre}`);
    }

}