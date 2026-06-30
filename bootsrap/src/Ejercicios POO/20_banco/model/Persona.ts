
export class Persona {
   
    private _nombre: string;  
    private _apellido: string;
    private _fechaDeNacimiento: Date;
    private _dni: string;
    private _sueldoBruto: number;
    private _antiguedadEmpleoActual: number;


    constructor(

        nombre: string,
        apellido: string,
        fechaDeNacimiento: Date,
        dni: string,
        sueldoBruto: number,
        antiguedadEmpleoActual: number
    ){

        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaDeNacimiento = fechaDeNacimiento;
        this._dni = dni;
        this._sueldoBruto = sueldoBruto;
        this._antiguedadEmpleoActual = antiguedadEmpleoActual;

    }

    public get nombre (){
        return this._nombre;
    }

    public get apellido (){
        return this._apellido;
    }

    public get fechaDeNacimiento (){
        return this._fechaDeNacimiento;
    }

    public get dni (){
        return this._dni;
    }

    public get sueldoBruto (){
        return this._sueldoBruto;
    }

    public get antiguedadEmpleoActual (){
        return this._antiguedadEmpleoActual;
    }

    public set nombre (nombre){
        this._nombre = nombre;
    }

    public set apellido (apellido){
        this._apellido = apellido;
    }

    public set fechaDeNacimiento (fechaDeNacimiento){
        this._fechaDeNacimiento = fechaDeNacimiento;
    }

    public set dni (dni){
        this._dni = dni;
    }

    public set sueldoBruto (sueldoBruto){
        this._sueldoBruto = sueldoBruto;
    }

    public set antiguedadEmpleoActual (antiguedadEmpleoActual){
        this._antiguedadEmpleoActual = antiguedadEmpleoActual;
    }

}