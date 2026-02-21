"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sensorTemperatura {
    observers = [];
    temperatura = 20;
    suscribir(observer) {
        this.observers.push(observer);
    }
    desuscribir(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    setTemperatura(nuevaTemp) {
        console.log(`🌡️ Temperatura actual: ${nuevaTemp}°C`);
        this.temperatura = nuevaTemp;
        this.notificar();
    }
    notificar() {
        for (const observer of this.observers) {
            observer.actualizar(this.temperatura);
        }
    }
}
exports.default = sensorTemperatura;
//# sourceMappingURL=sensorTemperatura.js.map