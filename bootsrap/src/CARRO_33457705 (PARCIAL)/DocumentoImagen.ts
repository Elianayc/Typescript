import { Documento } from "./Documento";


//Clase DocumentoImagen que hereda de Documento
export class DocumentoImagen extends Documento {

    //Constructor
    constructor(
        id: string,
        nombre: string, 
        contenido: string,

        //Atributos específicos de DocumentoImagen
        public formato: string,
        public ancho: number,
        public alto: number

    ) {
        super(id, nombre, contenido);
    }

    //Redefinición de los métodos abstractos
    validar(): boolean {

        //Devuelve true si el formato es válido y las dimensiones son mayores a 100x100
        const formatos = ['png', 'jpg', 'bmp'];
        return formatos.includes(this.formato) && this.ancho >= 100 && this.alto >= 100;
    }

    copiar(): Documento {
        //Devuelve una nueva instancia de DocumentoImagen con los mismos valores (clonada).
        return new DocumentoImagen(
            this.id, this.nombre, this.contenido, 
            this.formato, this.ancho, this.alto
        );
    }
}