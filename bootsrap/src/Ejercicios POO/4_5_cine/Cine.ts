

export class Cine {

    private _pelicula: string;
    private _horario: string;

    // Firmas para Sobrecargas de Constructor
    constructor();
    constructor(pelicula: string);
    constructor(pelicula: string, horario: string);

    // Implementación de Constructor con Sobrecargas
    constructor(pelicula?: string, horario?: string) { 
        //Película y horario son parámetros opcionales

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
        
        //Las comillas invertidas ` permiten armar strings 
        //e insertar variables directamente usando ${...}.
        return `${this._pelicula} - ${this._horario}`;

    }
    

}