import { Electrodomestico } from "./Electrodomestico";

export class Heladera extends Electrodomestico{

    _tieneFreezer: boolean;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        voltaje: number,
        tieneFreezer: boolean
    ) {
        super(id, descripcion, ancho, alto, voltaje);
        this._tieneFreezer = tieneFreezer;
    }

    
    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto} | 
        Voltaje: ${this.voltaje} | 
        Tiene Freezer: ${this._tieneFreezer}`;
    }

}