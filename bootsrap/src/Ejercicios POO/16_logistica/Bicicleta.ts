import { Elemento } from "./Elemento";

export class Bicicleta extends Elemento{

    _tamañoRodado: number;
    _esElectrica: boolean;
    _cantidadCambios: number;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number,
        tamañoRodado: number,
        esElectrica: boolean,
        cantidadCambios: number
    ){
        super(id, descripcion, ancho, alto);
        this._tamañoRodado = tamañoRodado;
        this._esElectrica = esElectrica;
        this._cantidadCambios = cantidadCambios;
    }

    public toString(): string {
        return `
        ID: ${this.id} | 
        Descripción: ${this.descripcion} | 
        Ancho: ${this.ancho} | 
        Alto: ${this.alto} | 
        Tamaño de Rodado: ${this._tamañoRodado} | 
        Es eléctrica: ${this._esElectrica} | 
        Cantidad de Cambios: ${this._cantidadCambios}`;
    }

}