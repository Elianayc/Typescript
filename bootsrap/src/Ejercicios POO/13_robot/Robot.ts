import { SistemaTraccion } from "./SistemaTraccion";

export class Robot {

    private _numSerie: string;
    private _potenciaBase: number;
    private _sistemaTraccion: SistemaTraccion;

    constructor(
        numeroSerie: string,
        potenciaBase: number,
        sistemaTraccion: SistemaTraccion
    ) {
        this._numSerie = numeroSerie;
        this._potenciaBase = potenciaBase;
        this._sistemaTraccion = sistemaTraccion;
    }

    public set numSerie(numeroSerie: string) {
        this._numSerie = numeroSerie;
    }

    public set potenciaBase(potenciaBase: number) {
        this._potenciaBase = potenciaBase;
    }

    public set sistemaTraccion(sistemaTraccion: SistemaTraccion) {
        this._sistemaTraccion = sistemaTraccion;
    }

    public get numSerie(): string {
        return this._numSerie;
    }

    public get potenciaBase(): number {
        return this._potenciaBase;
    }

    public get sistemaTraccion(): SistemaTraccion {
        return this._sistemaTraccion;
    }

    public mostrarDatos(): void {
        console.log(`
            Número de serie: ${this._numSerie}
            Potencia base: ${this._potenciaBase} hp
            Tipo de tracción: ${this._sistemaTraccion.tipo}
            Potencia final: ${this._potenciaBase - this._sistemaTraccion.reduccionHP} hp
            Distancia máxima: ${this._sistemaTraccion.distanciaMax} km
            ${this._sistemaTraccion.obtenerCaracteristicas()}
        `);
    }

}