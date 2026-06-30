import { Persona } from "../../model/Persona";

export class PersonIdentity {

  getInfo(dni: string): Persona {

    const nombre: string = "Juan";
    const apellido: string = "Perez";
    const fechaDeNacimiento: Date = new Date("2000-05-10");

    return new Persona(nombre, apellido, fechaDeNacimiento, dni, 0, 0);
  }
}