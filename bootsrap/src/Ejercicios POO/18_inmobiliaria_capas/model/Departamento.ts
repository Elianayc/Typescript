import { Inmueble } from "./Inmueble";
import { Direccion } from "./Direccion";
import { Ambiente } from "./Ambiente";
import { Contacto } from "./Contacto";

export class Departamento extends Inmueble{

    private _piso: number;
    private _letra: string;
    private _admiteMascota: boolean;

    constructor(

        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        tieneGas: boolean,
        tieneCloaca: boolean,
        observaciones: string,
        piso: number,
        letra: string,
        admiteMascota: boolean

    ){

        super(
        direccion, 
        ambientes, 
        contacto, 
        tieneGas, 
        tieneCloaca,
        observaciones
        )

        this._piso = piso;
        this._letra = letra;
        this._admiteMascota = admiteMascota;

    }


}