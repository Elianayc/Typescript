export class Ley {

    private _folio: number;
    private _emision: Date;
    private _desarrollo: string;
    private _firmante: string;

    constructor(
        folio: number,
        emision: Date,
        desarrollo: string,
        firmante: string
    ){
        this._folio = folio;
        this._emision = emision;
        this._desarrollo = desarrollo;
        this._firmante = firmante;
    }

    public get folio(): number {
        return this._folio;
    }

    public set folio(value: number) {
        this._folio = value;
    }

    public get emision(): Date {
        return this._emision;
    }

    public set emision(value: Date) {
        this._emision = value;
    }

    public get desarrollo(): string {
        return this._desarrollo;
    }

    public set desarrollo(value: string) {
        this._desarrollo = value;
    }

    public get firmante(): string {
        return this._firmante;
    }

    public set firmante(value: string) {
        this._firmante = value;
    }
}