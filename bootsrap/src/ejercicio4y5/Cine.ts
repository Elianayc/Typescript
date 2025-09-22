

export class Cine {

    private _pelicula: string;
    private _horario: string;


    constructor(pelicula: string, horario:string) {
        this._pelicula = pelicula;
        this._horario = horario;    
    }

    public setPelicula(v : string) {
            this._pelicula = v;
    }

    public setHorario(v : string){
        this._horario = v;
    }

    
    public getPelicula() : string {
        return this._pelicula;
    }
    
    public getHorario() : string {
        return this._horario;
    }


    public obtenerCartelera(): string {

        return this._pelicula, this._horario;

    }
    

}