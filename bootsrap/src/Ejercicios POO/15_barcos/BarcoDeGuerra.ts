import { Nivel } from "./Nivel";
import { Barco } from "./Barco";

export abstract class BarcoDeGuerra extends Barco{

    private _solidez: Nivel;
    private _potenciaFuego: Nivel;
    private _velocidadCrucero: number;


    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel,
        solidez: Nivel,
        potenciaFuego: Nivel,
        velocidadCrucero: number
    ){
        super(nombre, flotabilidad, estabilidad);
        this._solidez = solidez;
        this._potenciaFuego = potenciaFuego;
        this._velocidadCrucero = velocidadCrucero;
    }


    public get solidez() : Nivel {
        return this._solidez;
    }
    
    public get potenciaFuego() : Nivel {
        return this._potenciaFuego;
    }

    public get velocidadCrucero(): number {
        return this._velocidadCrucero;
    }
}