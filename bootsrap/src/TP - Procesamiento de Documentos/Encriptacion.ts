
//Primera estrategia de procesamiento: Encriptación
//Implementa la interface IEstrategiaProceso

import { IEstrategiaProceso } from "./IEstrategiaProceso";

export class Encriptacion implements IEstrategiaProceso {

    procesar(s: string): string {

        // Lógica de encriptación

        return `ENCRIPTADO: ${s}`;
    }
}
