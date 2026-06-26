
export class Direccion {

    private _provincia: string;
    private _barrio: string;
    private _calle: string;
    private _altura: number;
    private _codigoPostal: string;
    private _esBarrioPrivado: boolean;

    constructor (

        provincia: string,
        barrio: string,
        calle: string,
        altura: number,
        codigoPostal: string,
        esBarrioPrivado: boolean

    ){

        this._provincia = provincia;
        this._barrio = barrio;
        this._calle = calle;
        this._altura = altura;
        this._codigoPostal = codigoPostal;
        this._esBarrioPrivado = esBarrioPrivado;

    }


}