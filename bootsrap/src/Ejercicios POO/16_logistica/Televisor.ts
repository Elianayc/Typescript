import { Electrodomestico } from "./Electrodomestico";
import { TipoTV } from "./TipoTV";

export class Televisor extends Electrodomestico{

    _tipo: TipoTV;
    _esInteligente: boolean;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        voltaje: number,
        tipo: TipoTV,
        esInteligente: boolean
    ){
        super(id, descripcion, ancho, alto, voltaje);
        this._tipo = tipo;
        this._esInteligente = esInteligente;
    }

    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto} | 
        Voltaje: ${this.voltaje} | 
        Tipo: ${this._tipo} | 
        Es Inteligente: ${this._esInteligente}`;
    }

}