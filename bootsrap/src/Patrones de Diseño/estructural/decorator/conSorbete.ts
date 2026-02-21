import DecoratorAbstract from "./DecoratorAbstract";

export default class ConSorbete extends DecoratorAbstract{
    beber(): string {
        return `${super.beber()} con sorbete`; // Usando super para llamar al método de la clase base //salida esperada "Bebiendo agua con sorbete" //pero si se usa con jugo "Bebiendo agua con jugo con sorbete"
    }
    servir(): string {
        return `${super.servir()} con sorbete`;
    }
}