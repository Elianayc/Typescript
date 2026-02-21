import Iobserver from "./IObserver";

export default class bomberos implements Iobserver{
    actualizar(temperatura: number): void {
        if (temperatura > 50) {
            console.log("🚒 Bomberos: ¡Temperatura crítica detectada, enviando unidades!");
        }
    }
}