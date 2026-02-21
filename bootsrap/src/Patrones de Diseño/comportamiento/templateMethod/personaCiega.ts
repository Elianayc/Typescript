import plantilla from "./abstractTemplate";

export default class personaCiega extends plantilla{
    abrirOjos(): void {
        console.log("los abro pero no veo nada");
    }
    ver(): void {
        console.log("no puedo ver");
    }
    cerrarOjos(): void {
        console.log("los cierro pero no veo nada");
    }

}