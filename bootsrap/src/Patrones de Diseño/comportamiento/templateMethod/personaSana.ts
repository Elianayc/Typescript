import plantilla from "./abstractTemplate";

export default class personaSana extends plantilla{
    abrirOjos(): void {
        console.log("abriendo los ojos");
    }
    ver(): void {
        console.log("tengo buena vista");
    }
    cerrarOjos(): void {
        console.log("cerrando los ojos");
    }
    


}