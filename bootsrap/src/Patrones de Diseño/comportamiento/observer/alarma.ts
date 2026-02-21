import Iobserver from "./IObserver";

export default class alarma implements Iobserver{
    actualizar(temperatura: number): void {
       if(temperatura > 30){
        console.log("🚨 Alarma: ¡Temperatura alta detectada!");
       }
    }

}