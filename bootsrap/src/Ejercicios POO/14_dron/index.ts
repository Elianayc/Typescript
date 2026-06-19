import { Dron } from "./Dron";
import { BrazoRobotico } from "./BrazoRobotico";
import { SensorInfrarrojo } from "./SensorInfrarrojo";
import { Taser } from "./Taser";

function main(){

    const dron = new Dron(10,200,300);
    console.log(dron.calcularAltura());
    console.log(dron.calcularVelocidad());

    const sensor = new SensorInfrarrojo();
    dron.asignarHerramienta(sensor);
    console.log(dron.calcularAltura());
    console.log(dron.calcularVelocidad());

    const taser = new Taser();
    dron.asignarHerramienta(taser);
    console.log(dron.calcularAltura());
    console.log(dron.calcularVelocidad());
    
    const brazoRobotico = new BrazoRobotico();
    dron.asignarHerramienta(brazoRobotico);
    console.log(dron.calcularAltura());
    console.log(dron.calcularVelocidad());

}

main();