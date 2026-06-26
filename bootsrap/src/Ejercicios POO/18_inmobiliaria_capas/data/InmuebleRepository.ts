import { Inmueble } from "../model/Inmueble";

export class InmuebleRepository {

    // Lista interna de persistencia en memoria.
    private _listaInmuebles: Inmueble[] = [];

    // No necesito constructor.

    public agregar(inmueble: Inmueble): void{
        this._listaInmuebles.push(inmueble);
    }

    public listar(): Inmueble[]{

        // ... spread operator = copia todos los 
        // elementos del array uno por uno en uno nuevo.

        return [...this._listaInmuebles];
    }

}