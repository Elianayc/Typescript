export abstract class Elemento{

    private _id: number;
    private _descripcion: string;
    private _ancho: number;
    private _alto: number;

    constructor(
        id: number,
        descripcion: string,
        ancho: number,
        alto: number
    ){
        this._id = id;
        this._descripcion = descripcion;
        this._ancho = ancho;
        this._alto = alto;
    }

    public get id() : number {
        return this._id;
    }
    
    public get descripcion() : string {
        return this._descripcion;
    }

    public get ancho() : number {
        return this._ancho;
    }

    public get alto() : number {
        return this._alto;
    }
    
    public abstract toString(): string;

}


