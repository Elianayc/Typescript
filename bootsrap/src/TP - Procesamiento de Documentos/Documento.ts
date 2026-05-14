
//Clase Documento que contiene el contenido a procesar.

import { IEstrategiaProceso } from "./IEstrategiaProceso";

export class Documento {

    //Constructor
    constructor(private contenido: string, private estrategiaProceso: IEstrategiaProceso) {}

    //Setter para cambiar la estrategia de procesamiento.
    public setEstrategiaProceso(estrategia: IEstrategiaProceso): void {
        this.estrategiaProceso = estrategia;
    }

    //Método Procesar que usa la estrategia actual para procesar el contenido.
    public procesar(): string {
        return this.estrategiaProceso.procesar(this.contenido);
    }

}