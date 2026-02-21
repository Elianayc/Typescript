import DecoratorAbstract from "./DecoratorAbstract";

export default class ConJugo extends DecoratorAbstract{
    beber(): string {
        return `${super.beber()} con jugo`; // Usando super para llamar al método de la clase base //salida esperada "Bebiendo agua con jugo"
    }
    servir(): string {
        return `${super.servir()} con jugo`;
    }

}