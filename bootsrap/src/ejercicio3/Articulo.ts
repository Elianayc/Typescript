


class Articulo {

    private _marca: string;
    private _modelo: string;

    constructor(marca: string, modelo:string) {
        this._marca = marca;
        this._modelo = modelo;        
    }
    
    public set marca(v : string) {
        this._marca = v;
    }

    public set modelo(v : string) {
        this._modelo = v;
    }
}
