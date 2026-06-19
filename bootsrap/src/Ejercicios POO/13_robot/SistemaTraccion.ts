export abstract class SistemaTraccion {

    protected _tipo: string;
    protected _reduccionHP: number = 0;
    protected _distanciaMax: number = 0;
    
    constructor(
        tipo: string,
        reduccionHP: number,
        distanciaMax: number
    ) {
        this._tipo = tipo;
        this._reduccionHP = reduccionHP;
        this._distanciaMax = distanciaMax;
    }
        

    public get tipo(): string {
        return this._tipo;
    }
    
    public get reduccionHP(): number {
        return this._reduccionHP;
    }

    public get distanciaMax(): number {
        return this._distanciaMax;
    }   

    public abstract obtenerCaracteristicas(): string;
    
}