import { Elemento } from "./Elemento";

export class Caja extends Elemento{

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
    ){
        super(id, descripcion, ancho, alto);
    }

    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto}`;
    }

}