import cuadrado from "./formaCuadrada";
import { IformaCircular } from "./IformaCircular";

export default class adaptadorCuadradoCirculo implements IformaCircular {
    private formaCuadrada: cuadrado
    
    constructor(formaCuadrada: cuadrado) {
        this.formaCuadrada = formaCuadrada;
    }

    
    
    rodar(): string {
       return  this.formaCuadrada.getDescripcion() + " y me adapto a la forma circular. Estoy rodando como un círculo pero en realidad soy un cuadrado";
    }

}