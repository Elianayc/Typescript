import { Vehiculo } from "./Vehiculo";
import { Elemento } from "./Elemento";
import { Televisor } from "./Televisor";
import { Bicicleta } from "./Bicicleta";
import { Caja } from "./Caja";

export class Auto extends Vehiculo {

    private _capacidadMax: number;

    constructor(
        listaCarga: Elemento[],
    ){
        super(listaCarga);
        this._capacidadMax = 5;
    }

    public cargar(elemento: Elemento): void {

        const esValido =
            elemento instanceof Televisor ||
            elemento instanceof Bicicleta ||
            elemento instanceof Caja;

        const hayEspacio = this.listaCarga.length < this._capacidadMax;

        if (esValido && hayEspacio) {
            this.listaCarga.push(elemento);
        }
    }
} 