
export class Fruta{

    private _color: string;
    private _peso: number;
    private _esEstacional: boolean;

    constructor(color?: string, peso?: number, esEstacional?: boolean){
        this._color = color ?? "desconocido";
        this._peso = peso ?? 0;
        this._esEstacional = esEstacional ?? false;
    };

    set color(c:string){this._color = c;}
    get color():string{return this._color;} 

    set peso(p:number){this._peso = p;}
    get peso():number{return this._peso;}

    set esEstacional(e:boolean){this._esEstacional = e;}
    get esEstacional():boolean{return this._esEstacional;}

    public esComestible(): boolean { 
        return this._peso < 200 && this._esEstacional;
    }

}