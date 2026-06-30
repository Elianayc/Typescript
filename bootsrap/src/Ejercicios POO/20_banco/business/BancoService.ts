import { PersonIdentity } from "../infra/external/PersonIdentity"
import { Persona } from "../model/Persona";

export class BancoService {


    private personIdentity = new PersonIdentity();


    public evaluarAptoPrestamo(

        dni: string,
        sueldoBruto: number,
        antiguedadEmpleoActual: number

    ): void {

        const nuevaPersona = this.personIdentity.getInfo(dni);
        
        //Completamos sus datos
        nuevaPersona.dni = dni;
        nuevaPersona.sueldoBruto = sueldoBruto;
        nuevaPersona.antiguedadEmpleoActual = antiguedadEmpleoActual;

        if (this.calcularEdad(nuevaPersona.fechaDeNacimiento) < 21) {
            console.log("No es posible extender el préstamo por no reunir la edad mínima.");
            return;
        }

        this.otorgarPrestamo(nuevaPersona)

    }
        
    private calcularEdad(fechaNacimiento: Date): number {

        const hoy = new Date();

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();

        if (
            mes < 0 ||
            (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad;
    }
    
    private otorgarPrestamo(persona: Persona): void {

        if (persona.sueldoBruto >= 30000 && persona.sueldoBruto <= 40000) {
            console.log("Se puede otorgar un préstamo de $80.000 con 30% de interés.");
        }
        else if (persona.sueldoBruto > 40000 && persona.sueldoBruto <= 60000) {
            console.log("Se puede otorgar un préstamo de $120.000 con 35% de interés.");
        }
        else if (persona.sueldoBruto > 60000 && persona.sueldoBruto <= 80000) {
            console.log("Se puede otorgar un préstamo de $140.000 con 39% de interés.");
        }
        else if (persona.sueldoBruto > 80000) {
            console.log("No se extiende créditos para salarios mayores a $80.000.");
        }
        else {
            console.log("No se extiende créditos para salarios menores a $30.000.");
        }
    
    }
}