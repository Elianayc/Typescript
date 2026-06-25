import { Auto } from "./Auto";
import { Camioneta } from "./Camioneta";
import { Televisor } from "./Televisor";
import { Bicicleta } from "./Bicicleta";
import { Caja } from "./Caja";
import { Comoda } from "./Comoda";
import { Heladera } from "./Heladera";
import { Lavarropas } from "./Lavarropas";
import { TipoTV } from "./TipoTV";

// --------------------
// Crear vehículos
// --------------------

const auto = new Auto([]);
const camioneta = new Camioneta([]);

// --------------------
// Elementos para AUTO
// --------------------

const tv1 = new Televisor(1, "TV Samsung", 120, 70, 220, TipoTV.LED, true);
const tv2 = new Televisor(2, "TV LG", 100, 60, 220, TipoTV.LCD, false);

const bici1 = new Bicicleta(3, "Bici plegable", 90, 50, 20, true, 6);

const caja1 = new Caja(4, "Caja pequeña", 40, 30);

// --------------------
// Elementos para CAMIONETA
// --------------------

const comoda1 = new Comoda(5, "Cómoda dormitorio", 100, 80, 2.5, 5);

const heladera1 = new Heladera(6, "Heladera grande", 80, 180, 220, true);

const lavarropa1 = new Lavarropas(7, "Lavarropas automático", 60, 85, 220, 8, 1200);

// --------------------
// Cargar AUTO (máx 5)
// --------------------

auto.cargar(tv1);
auto.cargar(tv2);
auto.cargar(bici1);
auto.cargar(caja1);

// --------------------
// Cargar CAMIONETA (máx 10)
// --------------------

camioneta.cargar(comoda1);
camioneta.cargar(heladera1);
camioneta.cargar(lavarropa1);

// --------------------
// Mostrar resultados
// --------------------

console.log("AUTO:");
auto.listarElementos();

console.log("\nCAMIONETA:");
camioneta.listarElementos();