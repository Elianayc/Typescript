import { Elemento } from "./Elemento";

export abstract class Vehiculo {

    private _listaCarga: Elemento[];
    constructor(listaCarga: Elemento[]){
        this._listaCarga = listaCarga;
    }

    get listaCarga(){
        return this._listaCarga;
    }

    public listarElementos(): void {
        this._listaCarga.forEach(elemento => {
                console.log(elemento.toString());
            }
        );
    }

    public abstract cargar(elemento: Elemento): void;
} 
