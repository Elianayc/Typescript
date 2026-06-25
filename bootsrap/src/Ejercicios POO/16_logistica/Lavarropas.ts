import { Electrodomestico } from "./Electrodomestico";

export class Lavarropas extends Electrodomestico{

    _carga: number;
    _revolucionesCentrifugado: number;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        voltaje: number,
        carga: number,
        revolucionesCentrifugado: number
    ){
        super(id, descripcion, ancho, alto, voltaje);
        this._carga = carga;
        this._revolucionesCentrifugado = revolucionesCentrifugado;
    }

    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto} | 
        Voltaje: ${this.voltaje} | 
        Carga: ${this._carga} | 
        Revoluciones de Centrifugado: ${this._revolucionesCentrifugado}`;
    }

}