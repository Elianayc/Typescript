import { Inmueble } from "./Inmueble";
import { Direccion } from "./Direccion";
import { Ambiente } from "./Ambiente";
import { Contacto } from "./Contacto";

export class Casa extends Inmueble {

    private _tieneQuincho: boolean;
    private _tienePileta: boolean;
   
    constructor(

        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        tieneGas: boolean,
        tieneCloaca: boolean,
        observaciones: string,
        tieneQuincho: boolean,
        tienePileta: boolean

    ){
        super(
        direccion, 
        ambientes, 
        contacto, 
        tieneGas, 
        tieneCloaca,
        observaciones
        )

        this._tieneQuincho = tieneQuincho;
        this._tienePileta = tienePileta;

    }


}