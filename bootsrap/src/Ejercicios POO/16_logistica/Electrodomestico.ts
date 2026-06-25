import {Elemento} from "./Elemento";

export abstract class Electrodomestico extends Elemento {

    private _voltaje: number;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        voltaje: number
    ) {
        super(id, descripcion, ancho, alto);
        this._voltaje = voltaje;
    }

    public get voltaje() : number {
        return this._voltaje;
    }
}