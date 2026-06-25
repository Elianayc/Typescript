import { Nivel } from "./Nivel";
import { Barco } from "./Barco";

export class BarcoHospital extends Barco{

    private _capacidadPacientes: number;

    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel,
        capacidadPacientes: number
    ){
        super(nombre, flotabilidad, estabilidad);
        this._capacidadPacientes = capacidadPacientes;
    }


    public get capacidadPacientes() : number {
        return this._capacidadPacientes;
    }
}