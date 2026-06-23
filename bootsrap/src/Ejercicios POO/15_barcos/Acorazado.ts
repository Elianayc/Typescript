import { Nivel } from "./Nivel";
import { BarcoDeGuerra } from "./BarcoDeGuerra";


export class Acorazado extends BarcoDeGuerra{

    private _blindaje: Nivel;

    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel,
        solidez: Nivel,
        potenciaFuego: Nivel,
        velocidadCrucero: number,
        blindaje: Nivel
    ){
        super(nombre, flotabilidad, estabilidad, solidez, potenciaFuego, velocidadCrucero);
        this._blindaje = blindaje;
    }

    
    public get blindaje() : Nivel {
        return this._blindaje;
    }

    
    public set blindaje(blindaje : Nivel) {
        this._blindaje = blindaje;
    }
}