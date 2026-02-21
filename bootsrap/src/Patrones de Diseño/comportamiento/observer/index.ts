import alarma from "./alarma";
import bomberos from "./bomberos";
import calefaccion from "./calefaccion";
import sensorTemperatura from "./sensorTemperatura";

const sensor = new sensorTemperatura();
const alarma1 = new alarma();
const calefaccion1 = new calefaccion();
const bomberos1 = new bomberos();

console.log("=== Sistema de Monitoreo de Temperatura ===");
sensor.suscribir(alarma1);
sensor.suscribir(calefaccion1);
sensor.suscribir(bomberos1);

sensor.setTemperatura(5);// Temperatura baja salida esperada: Calefacción
console.log("-----------------------------------");
sensor.setTemperatura(25);// Temperatura normal salida esperada: Ninguna
console.log("-----------------------------------");
sensor.setTemperatura(35);// Temperatura alta salida esperada: Alarma
console.log("-----------------------------------");
sensor.setTemperatura(55);// Temperatura crítica salida esperada: Bomberos