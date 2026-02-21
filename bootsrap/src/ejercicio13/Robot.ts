import { SistemaTraccion } from "./SistemaTraccion";

export class Robot{

    private _numSerie: number;
    private _potenciaBase: number;
    private _sistemaTraccion: SistemaTraccion;

    constructor(ns: number, pb: number, st: SistemaTraccion){
        this._numSerie = ns;
        this._potenciaBase = pb;
        this._sistemaTraccion = st;
    }

    set numSerie(ns: number){this._numSerie=ns;}
    set potenciaBase(pb: number){this._potenciaBase=pb;}
    set sistemaTraccion(st: SistemaTraccion){this._sistemaTraccion=st;}

    get numSerie(): number{return this._numSerie;}
    get potenciaBase(): number{return this._potenciaBase;}
    get sistemaTraccion(): SistemaTraccion{return this._sistemaTraccion;}

    public mostrarDatos(): void{
        console.log(`\n 
            Número de serie: ${this._numSerie} \n 
            Potencia de tracción final: ${this._potenciaBase} \n
            Tipo de tracción: ${this._sistemaTraccion} \n
            Puede avanzar: ${this._sistemaTraccion} \n`);
    }

}