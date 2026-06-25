import { Nivel } from "./Nivel";
import { Acorazado } from "./Acorazado";
import { Destructor } from "./Destructor";
import { BarcoHospital } from "./BarcoHospital";
import { LanchaMedica } from "./LanchaMedica";

// ACORAZADO
const acorazado = new Acorazado(
  "Acorazado Leviatán",
  Nivel.Excelente,
  Nivel.Extrema,
  Nivel.Alta,
  Nivel.Excelente,
  40,
  Nivel.Excelente
);

// DESTRUCTOR
const destructor = new Destructor(
  "Destructor Tritón",
  Nivel.Alta,
  Nivel.Alta,
  Nivel.Media,
  Nivel.Alta,
  55,
  Nivel.Alta
);

// BARCO HOSPITAL
const hospital = new BarcoHospital(
  "Sibelancia",
  Nivel.Excelente,
  Nivel.Extrema,
  75
);

// LANCHAS MÉDICAS
const lancha1 = new LanchaMedica(
  "La Gaucha",
  Nivel.Elevada,
  Nivel.Baja,
  "Fuera de borda",
  Nivel.Baja,
  300
);

const lancha2 = new LanchaMedica(
  "El Gaucho",
  Nivel.Elevada,
  Nivel.Baja,
  "Fuera de borda",
  Nivel.Baja,
  300
);

// OUTPUT
console.log("=== ACORAZADO ===");
console.log(acorazado.nombre);
console.log(acorazado.blindaje);

console.log("\n=== DESTRUCTOR ===");
console.log(destructor.nombre);
console.log(destructor.maniobrabilidad);

console.log("\n=== HOSPITAL ===");
console.log(hospital.nombre);
console.log(hospital.capacidadPacientes);

console.log("\n=== LANCHAS ===");
console.log(lancha1.nombre);
console.log(lancha2.nombre);

