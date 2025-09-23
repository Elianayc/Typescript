
import { Persona } from "./Persona";

export class Visitante extends Persona {

    private _dni: number;

    constructor (n?: string, a?: string, d?: number) {
        super(n, a);
        this._dni = d ?? 0;
    }

    set dni(d: number){this._dni = d;}
    get dni(): number{return this._dni;}

}