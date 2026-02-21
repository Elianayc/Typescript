import comprimir from "./comprimir";
import documento from "./documento";

const documento1 = new documento("Archivo1", "Contenido del archivo 1");
const formaDeProcesar1 = new comprimir();
console.log("Creando cliente con forma de procesar: Comprimir");
import cliente from "./cliente";

const cliente1 = new cliente(documento1, formaDeProcesar1);

cliente1.procesarDocumento();

import encriptar from "./encriptar";

const formaDeProcesar2 = new encriptar();
console.log("Cambiando forma de procesar a: Encriptar");
cliente1.setFormaDeProcesar(formaDeProcesar2);

cliente1.procesarDocumento();

//salida esperada
//Creando cliente con forma de procesar: Comprimir
//Comprimiendo documento con nombre Archivo1 y contenido Contenido del archivo 1
//Cambiando forma de procesar a: Encriptar
//Encriptando documento con nombre Archivo1 y contenido Contenido del archivo 1
