import { Articulo } from "./Articulo";

export class PrecioPorArticulo{

    private _precio: number;
    private _articulo: Articulo;

    constructor(
        precio: number,
        articulo: Articulo
    ){
        this._precio = precio;
        this._articulo = articulo;
    }

    public get precio(){
        return this._precio;
    }

    public get articulo(){
        return this._articulo;
    }

    public set precio(precio: number){
        this._precio = precio;
    }

    public set articulo(articulo: Articulo){
        this._articulo = articulo;
    }
}