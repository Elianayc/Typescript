export class Escrito {

    private _legajo: number;
    private _erogacion: Date;
    private _cuerpo: string;
    private _autor: string;

    constructor(
        legajo: number,
        erogacion: Date,
        cuerpo: string,
        autor: string
    ){
        this._legajo = legajo;
        this._erogacion = erogacion;
        this._cuerpo = cuerpo;
        this._autor = autor;
    }

    public get legajo(): number {
        return this._legajo;
    }

    public set legajo(value: number) {
        this._legajo = value;
    }

    public get erogacion(): Date {
        return this._erogacion;
    }

    public set erogacion(value: Date) {
        this._erogacion = value;
    }

    public get cuerpo(): string {
        return this._cuerpo;
    }

    public set cuerpo(value: string) {
        this._cuerpo = value;
    }

    public get autor(): string {
        return this._autor;
    }

    public set autor(value: string) {
        this._autor = value;
    }
}