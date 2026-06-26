import promptSync from "prompt-sync";
import { InmobiliariaService } from "../business/InmobiliariaService";
import { InmuebleRepository } from "../data/InmuebleRepository";

const prompt = promptSync();

const repo = new InmuebleRepository();
const service = new InmobiliariaService(repo);

console.log("=== ALTA DE DIRECCION ===");
const provincia = prompt("Ingrese provincia: ");
const barrio = prompt("Ingrese barrio: ");
const calle = prompt("Ingrese calle: ");
const altura = Number(prompt("Ingrese altura: "));
const codigoPostal = prompt("Ingrese código postal: ");
const esBarrioPrivado = prompt("¿Es barrio privado? (s/n): ") === "s";

const direccion = service.altaDireccion(
    provincia,
    barrio,
    calle,
    altura,
    codigoPostal,
    esBarrioPrivado
);

console.log("=== ALTA DE CONTACTO ===");
const nombre = prompt("Ingrese nombre: ");
const apellido = prompt("Ingrese apellido: ");
const telefono = prompt("Ingrese teléfono: ");
const email = prompt("Ingrese email: ");

const contacto = service.altaContacto(
    nombre,
    apellido,
    telefono,
    email
);

console.log("=== ALTA DE AMBIENTE ===");
const ambientes: any[] = [];
const cantidadAmbientes = Number(prompt("Cantidad de ambientes: "));

for (let i = 0; i < cantidadAmbientes; i++) {

    console.log(`--- Ambiente ${i + 1} ---`);

    const tipo = prompt("Tipo: ");
    const ancho = Number(prompt("Ancho: "));
    const largo = Number(prompt("Largo: "));
    const esLuminoso = prompt("¿Es luminoso? (s/n): ") === "s";

    ambientes.push(
        service.altaAmbiente(tipo, ancho, largo, esLuminoso)
    );
}


console.log("=== DATOS DEL INMUEBLE ===");

const tieneGas = prompt("¿Tiene gas? (s/n): ") === "s";
const tieneCloaca = prompt("¿Tiene cloaca? (s/n): ") === "s";
const observaciones = prompt("Observaciones: ");
const tipoInmueble = prompt("¿Es casa o departamento?: ").toLowerCase();

if (tipoInmueble === "casa") {

    console.log("=== DATOS CASA ===");
    const tieneQuincho = prompt("¿Tiene quincho? (s/n): ") === "s";
    const tienePileta = prompt("¿Tiene pileta? (s/n): ") === "s";

    service.altaCasa(
        direccion,
        ambientes,
        contacto,
        tieneGas,
        tieneCloaca,
        observaciones,
        tieneQuincho,
        tienePileta
    );

} else if (tipoInmueble === "departamento") {

    console.log("=== DATOS DEPARTAMENTO ===");
    const piso = Number(prompt("Piso: "));
    const letra = prompt("Letra: ");
    const admiteMascota = prompt("¿Admite mascota? (s/n): ") === "s";

    service.altaDepartamento(
        direccion,
        ambientes,
        contacto,
        tieneGas,
        tieneCloaca,
        observaciones,
        piso,
        letra,
        admiteMascota
    );
}



console.log("\n✔ Inmueble cargado correctamente");

console.log("\n=== INMUEBLES ===");
console.log(service.listarInmuebles());