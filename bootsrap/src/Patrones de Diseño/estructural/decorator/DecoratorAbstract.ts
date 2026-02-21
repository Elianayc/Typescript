import IAgua from "./Iagua";

export default abstract class DecoratorAbstract implements IAgua {
    protected agua: IAgua;

    constructor(agua: IAgua) {
        this.agua = agua;
    }
    
    beber(): string {
        return this.agua.beber();
    }
    servir(): string {
        return this.agua.servir();
    }
}