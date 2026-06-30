
export class Articulo {

    private _nombre: string;
    private _costoDeProduccion: number;
    private _observacion: string;

    constructor(

        nombre: string,
        costoDeProduccion: number,
        observacion?: string

    ){

        this._nombre = nombre;
        this._costoDeProduccion = costoDeProduccion;
        this._observacion = observacion ?? "";
    }

    public get nombre (){
        return this._nombre;
    }

    public get costoDeProduccion (){
        return this._costoDeProduccion;
    }

    public get observacion (){
        return this._observacion;
    }
}