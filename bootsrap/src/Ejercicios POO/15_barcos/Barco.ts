import { Nivel } from "./Nivel";

export abstract class Barco {

    private _nombre: string;
    private _flotabilidad: Nivel;
    private _estabilidad: Nivel;

    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel
    ){
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._estabilidad = estabilidad;
    }

    
    public get nombre() : string {
        return this._nombre;
    }

    
    public get flotabilidad() : Nivel {
        return this._flotabilidad;
    }

    
    public get estabilidad() : Nivel {
        return this._estabilidad;
    }

    
    public set nombre(nombre : string) {
        this._nombre = nombre;
    }
    
    
    public set flotabilidad(flotabilidad : Nivel) {
        this._flotabilidad = flotabilidad;
    }
    
    public set estabilidad(estabilidad : Nivel) {
        this._estabilidad = estabilidad;
    }



}
