
export class Persona{

    protected _nombre: string;
    protected _apellido: string;
    
    constructor(nombre?: string, apellido?: string) {
        this._nombre = nombre ?? "desconocido";
        this._apellido = apellido ?? "desconocido";
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set apellido(apellido: string) {
        this._apellido = apellido;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get apellido(): string {
        return this._apellido;
    }
    
    public presentarse(): void{
        console.log(`Nombre: ${this.nombre} - Apellido: ${this.apellido}`);
    }
}