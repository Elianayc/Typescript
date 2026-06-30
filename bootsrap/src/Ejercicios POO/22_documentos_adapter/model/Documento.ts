export class Documento {

    private _expediente: number;
    private _lanzamiento: Date;
    private _contenido: string;
    private _nombre: string;

    constructor(
        expediente: number,
        lanzamiento: Date,
        contenido: string,
        nombre: string
    ){
        this._expediente = expediente;
        this._lanzamiento = lanzamiento;
        this._contenido = contenido;
        this._nombre = nombre;
    }

    public get expediente(): number {
        return this._expediente;
    }

    public set expediente(value: number) {
        this._expediente = value;
    }

    public get lanzamiento(): Date {
        return this._lanzamiento;
    }

    public set lanzamiento(value: Date) {
        this._lanzamiento = value;
    }

    public get contenido(): string {
        return this._contenido;
    }

    public set contenido(value: string) {
        this._contenido = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }
}