import Iobserver from "./IObserver";

export default class calefaccion implements Iobserver{
    actualizar(temperatura: number): void {
       if(temperatura < 10){
        console.log("🔥 Calefacción: ¡Temperatura baja detectada, encendiendo calefacción!");
       }
    }
}