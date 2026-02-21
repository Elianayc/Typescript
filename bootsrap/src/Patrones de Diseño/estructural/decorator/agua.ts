import IAgua from "./Iagua";

export default class agua implements IAgua {
    beber(): string {
        return "Bebiendo agua";
    }   
    servir(): string {
        return "Sirviendo agua";
    }
}