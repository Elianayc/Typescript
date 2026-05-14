import { Documento } from "./Documento";

//Clase DocumentoTexto que hereda de Documento
export class DocumentoTexto extends Documento {

    //Redefinición de los métodos abstractos
    validar(): boolean {

        //Devuelve true si el contenido no está vacío
        return this.contenido.length > 0;
    }

    copiar(): Documento {

        //Devuelve una nueva instancia de DocumentoTexto con los mismos valores (clonada).
        return new DocumentoTexto(this.id, this.nombre, this.contenido);
    }
}