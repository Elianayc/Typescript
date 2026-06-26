
export class Contacto {

    private _nombre: string;
    private _apellido: string;
    private _telefono: string;
    private _email: string;

    constructor(

        nombre: string,
        apellido: string,
        telefono: string,
        email: string

    ){

        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._email = email;

    }

    public get nombre() : string {
        return this._nombre;
    }

    public get apellido() : string {
        return this._apellido;
    }

    public get telefono() : string {
        return this._telefono;
    }

    public get email() : string {
        return this._email;
    }



}