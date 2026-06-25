
export class Fruta{

    private _color: string;
    private _peso: number;
    private _esEstacional: boolean;

    // El constructor acepta parámetros opcionales con valores predeterminados
    constructor(color?:string, peso?:number, esEstacional?:boolean){

        this._color = color ?? "desconocido"; 
        // Si no se proporciona un color, se asigna "desconocido"

        this._peso = peso ?? 0;
        // Si no se proporciona un peso, se asigna 0

        this._esEstacional = esEstacional ?? false;
        // Si no se proporciona el valor de esEstacional, se asigna false
    };


    // Métodos getter y setter para cada propiedad
    get color():string{return this._color;} 
    get peso():number{return this._peso;}
    get esEstacional():boolean{return this._esEstacional;}
    
    set color(c:string){this._color = c;}
    set peso(p:number){this._peso = p;}
    set esEstacional(e:boolean){this._esEstacional = e;}

    //Método para determinar si la fruta es comestible
    public esComestible(): boolean { 
        // La fruta es comestible si su peso es menor a 200 gramos y es estacional
        return this._peso < 200 && this._esEstacional;
    }

}