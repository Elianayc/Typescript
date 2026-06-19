
import { Robot } from "./Robot";
import { RuedaCaucho } from "./RuedaCaucho";
import { Oruga } from "./Oruga";

const robot = new Robot(
    "KT-2020-P",
    10,
    new RuedaCaucho()
);

console.log("Datos del robot con rueda de caucho:");
robot.mostrarDatos();

robot.sistemaTraccion = new Oruga();

console.log("Datos del robot con oruga:");
robot.mostrarDatos();

