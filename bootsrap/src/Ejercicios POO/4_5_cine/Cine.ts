

export class Cine {

    private _pelicula: string;
    private _horario: string;

    // Sobrecargas de Constructores (firmas)
    constructor();
    constructor(pelicula: string);
    constructor(pelicula: string, horario: string);

    // Implementación de Constructor
    constructor(pelicula?: string, horario?: string) {
        if (pelicula && horario) {
            this._pelicula = pelicula;
            this._horario = horario;

        } else if (pelicula) {
            this._pelicula = pelicula;
            this._horario = "Sin definir";

        } else {
            this._pelicula = "Sin definir";
            this._horario = "Sin definir";
        }
    }

    // Getters y setters
    get pelicula():string{return this._pelicula;}
    set pelicula(p:string){this._pelicula = p;}

    get horario():string{return this._horario;}
    set horario(h:string){this._horario = h;}


    public obtenerCartelera(): string {
        //Template literal
        return `${this._pelicula} - ${this._horario}`;
    }
    

}