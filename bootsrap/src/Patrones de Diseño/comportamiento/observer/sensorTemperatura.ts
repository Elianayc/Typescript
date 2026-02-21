import Iobserver from "./IObserver";

export default class sensorTemperatura {
    private observers: Iobserver[] = [];
    private temperatura: number = 20;
    

    public suscribir(observer: Iobserver): void {
        this.observers.push(observer);
    }
    public desuscribir(observer: Iobserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);

    }

    public setTemperatura(nuevaTemp: number): void { // Simula el cambio de temperatura
        console.log(`🌡️ Temperatura actual: ${nuevaTemp}°C`);
        this.temperatura = nuevaTemp;
        this.notificar();
    }

    public notificar(): void {
        for (const observer of this.observers) {
            observer.actualizar(this.temperatura);
        }
    }

}
//ejemplo de observadores