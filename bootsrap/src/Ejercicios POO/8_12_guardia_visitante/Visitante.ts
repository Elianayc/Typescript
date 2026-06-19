
import { Persona } from "./Persona";

export class Visitante extends Persona {

    private _dni: number;

    constructor(nombre?: string, apellido?: string, dni?: number) {
        super(nombre, apellido);
        this._dni = dni ?? 0;
    }

    public set dni(dni: number) {
        this._dni = dni;
    }

    public get dni(): number {
        return this._dni;
    }
}