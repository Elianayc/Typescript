import { Elemento } from "./Elemento";

export class Comoda extends Elemento{

    _superficie: number;
    _cantidadCajones: number;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        superficie: number,
        cantidadCajones: number
    ){
        super(id, descripcion, ancho, alto);
        this._superficie = superficie;
        this._cantidadCajones = cantidadCajones;
    }

    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto} | 
        Superficie: ${this._superficie} | 
        Cantidad de Cajones: ${this._cantidadCajones}`;
    }

}