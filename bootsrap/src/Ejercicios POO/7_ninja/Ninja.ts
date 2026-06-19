


export class Ninja{

    private _arteMarcial: string;
    private _arma: string;
    private _fuerza: number;
    private _salto: number;

    constructor(art?: string, arm?: string, fue?: number, sal?: number){
        this._arteMarcial = art ?? "desconocido";
        this._arma = arm ?? "desconocido";
        this._fuerza = fue ?? 0;
        this._salto = sal ?? 0;
    }

    set arteMarcial(a:string){this._arteMarcial=a;}
    get arteMarcial():string{return this._arteMarcial;}

    set arma(a:string){this._arma=a;}
    get arma():string{return this._arma;}

    set fuerza(f:number){this._fuerza=f;}
    get fuerza():number{return this._fuerza;}

    set salto(s: number){this._salto=s;}
    get salto(): number{return this._salto;}

    public saltar(m: number){
        // Muestra la distancia que el ninja puede saltar, 
        // que se calcula multiplicando su capacidad de salto 
        // por el número de metros que se le indique como argumento.
        console.log(`${this._salto * m}`)
    }

    public ataque(){
        // Muestra el arma y el arte marcial del ninja.
        console.log(`${this._arma} - ${this._arteMarcial}`)
    }

}