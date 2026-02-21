export default abstract class plantilla{


    public  mirar(): void{
        this.abrirOjos();
        this.ver();
        this.cerrarOjos();
    }

    abstract abrirOjos(): void;
    abstract ver(): void;
    abstract cerrarOjos(): void;
}