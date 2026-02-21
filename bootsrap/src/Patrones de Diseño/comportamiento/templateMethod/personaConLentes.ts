import plantilla from "./abstractTemplate";
//ejemplo de template method
export default class personaConLentes extends plantilla{
    abrirOjos(): void {
        console.log("abriendo los ojos")
    }
    ver(): void {
        console.log("no tengo buena vista, uso lentes")
    }
    cerrarOjos(): void {
        console.log("cerrando los ojos")
    }

}