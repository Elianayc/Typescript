import { Direccion } from "./Direccion";
import { Ambiente } from "./Ambiente";
import { Contacto } from "./Contacto";

export abstract class Inmueble {

    private _direccion: Direccion;
    private _ambientes: Ambiente[];
    private _contacto: Contacto;
    private _tieneGas: boolean;
    private _tieneCloaca: boolean;
    
    private _observaciones: string;

    constructor(

        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        tieneGas: boolean,
        tieneCloaca: boolean,
        observaciones: string

    ){

        this._direccion = direccion;
        this._ambientes = ambientes;
        this._contacto = contacto;
        this._tieneGas = tieneGas;
        this._tieneCloaca = tieneCloaca;
        this._observaciones = observaciones;

    }







}