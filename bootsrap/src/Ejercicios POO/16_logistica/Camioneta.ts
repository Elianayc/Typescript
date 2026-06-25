import { Vehiculo } from "./Vehiculo";
import { Elemento } from "./Elemento";
import { Comoda } from "./Comoda";
import { Heladera } from "./Heladera";
import { Lavarropas } from "./Lavarropas";


export class Camioneta extends Vehiculo {

    private _capacidadMax: number;

    constructor(
        listaCarga: Elemento[],
    ){
        super(listaCarga);
        this._capacidadMax = 10;
    }

    public cargar(elemento: Elemento): void {

        const esValido =
            elemento instanceof Comoda ||
            elemento instanceof Heladera ||
            elemento instanceof Lavarropas;

        const hayEspacio = this.listaCarga.length < this._capacidadMax;

        if (esValido && hayEspacio) {
            this.listaCarga.push(elemento);
        }
    }
    
} 