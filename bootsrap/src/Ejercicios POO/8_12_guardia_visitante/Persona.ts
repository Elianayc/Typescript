
export class Persona{

    protected _nombre: string;
    protected _apellido: string;
    
    constructor(n?: string, a?: string) {
        this._nombre = n ?? "desconocido";
        this._apellido = a ?? "desconocido";
    }

    set nombre(n: string){this._nombre=n;}
    set apellido(a: string){this._apellido=a;}

    get nombre(): string{return this._nombre;}
    get apellido(): string{return this._apellido;}

    public presentarse(): void{
        console.log(`Nombre: ${this.nombre} - Apellido: ${this.apellido}`);
    }
}