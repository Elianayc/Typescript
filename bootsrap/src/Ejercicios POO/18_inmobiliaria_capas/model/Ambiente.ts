
export abstract class Ambiente {

    private _tipo: string;
    private _ancho: number;
    private _largo: number;
    private _esLuminoso: boolean;

    constructor(

        tipo: string,
        ancho: number,
        largo: number,
        esLuminoso: boolean

    ){

        this._tipo = tipo;
        this._ancho = ancho;
        this._largo = largo;
        this._esLuminoso = esLuminoso;

    }


    public calcularM2(): number{
        return this._largo * this._ancho;
    }


}