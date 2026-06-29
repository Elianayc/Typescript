import { PrecioPorArticulo } from "./PrecioPorArticulo";

export class ListaDePrecios{

    private _nombre: string;
    private _fechaDeVigencia: Date;
    private _esMayorista: boolean;
    private _precioPorArticulo: PrecioPorArticulo[];

    constructor(

        nombre: string,
        fechaDeVigencia: Date,
        esMayorista: boolean,
        precioPorArticulo: PrecioPorArticulo[]

    ){

        this._nombre = nombre;
        this._fechaDeVigencia = fechaDeVigencia;
        this._esMayorista = esMayorista;
        this._precioPorArticulo = precioPorArticulo;

    }

    public get nombre(){
        return this._nombre;
    }

    public get fechaDeVigencia(){
        return this._fechaDeVigencia;
    }

    public get esMayorista(){
        return this._esMayorista;
    }

    public get precioPorArticulo(){
        return this._precioPorArticulo;
    }

}