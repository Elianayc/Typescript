import { Nivel } from "./Nivel";
import { Barco } from "./Barco";

export class LanchaMedica extends Barco{

    private _motor: string;
    private _maniobrabilidad: Nivel;
    private _capacidadGruaKg: number;

    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel,
        motor: string,
        maniobrabilidad: Nivel,
        capacidadGruaKg: number
    ){
        super(nombre, flotabilidad, estabilidad);
        this._motor = motor;
        this._maniobrabilidad = maniobrabilidad;
        this._capacidadGruaKg = capacidadGruaKg;
    }

    public get motor() : string {
        return this._motor;
    }

    public get maniobrabilidad() : Nivel {
        return this._maniobrabilidad;
    }

    public get capacidadGruaKg() : number {
        return this._capacidadGruaKg;
    }
}