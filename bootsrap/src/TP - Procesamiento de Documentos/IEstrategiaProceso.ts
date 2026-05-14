
//Interface strategy que usarán mis distintos procesamientos.
//Todos deben redefinir el método Procesar.

export interface IEstrategiaProceso {
    procesar(input: string): string;
}