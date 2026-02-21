"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alarma_1 = __importDefault(require("./alarma"));
const bomberos_1 = __importDefault(require("./bomberos"));
const calefaccion_1 = __importDefault(require("./calefaccion"));
const sensorTemperatura_1 = __importDefault(require("./sensorTemperatura"));
const sensor = new sensorTemperatura_1.default();
const alarma1 = new alarma_1.default();
const calefaccion1 = new calefaccion_1.default();
const bomberos1 = new bomberos_1.default();
console.log("=== Sistema de Monitoreo de Temperatura ===");
sensor.suscribir(alarma1);
sensor.suscribir(calefaccion1);
sensor.suscribir(bomberos1);
sensor.setTemperatura(5);
console.log("-----------------------------------");
sensor.setTemperatura(25);
console.log("-----------------------------------");
sensor.setTemperatura(35);
console.log("-----------------------------------");
sensor.setTemperatura(55);
//# sourceMappingURL=index.js.map