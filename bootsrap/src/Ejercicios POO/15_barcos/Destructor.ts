import { Nivel } from "./Nivel";
import { BarcoDeGuerra } from "./BarcoDeGuerra";


export class Destructor extends BarcoDeGuerra{

    private _maniobrabilidad: Nivel;

    constructor(
        nombre: string,
        flotabilidad: Nivel,
        estabilidad: Nivel,
        solidez: Nivel,
        potenciaFuego: Nivel,
        velocidadCrucero: number,
        maniobrabilidad: Nivel
    ){
        super(nombre, flotabilidad, estabilidad, solidez, potenciaFuego, velocidadCrucero);
        this._maniobrabilidad = maniobrabilidad;
    }

    
    public get maniobrabilidad() : Nivel {
        return this._maniobrabilidad;
    }

    
    public set maniobrabilidad(maniobrabilidad : Nivel) {
        this._maniobrabilidad = maniobrabilidad;
    }
}