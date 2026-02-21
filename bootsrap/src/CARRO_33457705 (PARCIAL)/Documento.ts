

//Clase abstracta Documento Prototipo
export abstract class Documento {

    //Constructor
    constructor(
        public id: string,
        public nombre: string, 
        public contenido: string
    ) {}

    //Métodos abstractos que tengo que redefinir en las clases hijas
    abstract validar(): boolean;
    abstract copiar(): Documento;
    
    //Método para editar el contenido del documento
    editar(contentIdo: string): Documento {
        this.contenido = contentIdo;
        return this;
    }
}