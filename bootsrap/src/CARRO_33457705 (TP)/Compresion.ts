
//Segunda estrategia de procesamiento: Compresión
//Implementa la interface IEstrategiaProceso

import { IEstrategiaProceso } from "./IEstrategiaProceso";

export class Compresion implements IEstrategiaProceso {

    procesar(s: string): string {

        // Lógica de compresión
        
        return `COMPRIMIDO: ${s}`;
    }               
}