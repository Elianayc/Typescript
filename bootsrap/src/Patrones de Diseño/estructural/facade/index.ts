//ejemplo de fachada para simplificar el uso de una computadora
import procesador from "./procesador";
import ram from "./ram";
import almacenamiento from "./almacenamiento";
import computadora from "./computadora";

const miComputadora = new computadora();

miComputadora.encender();
// Salida esperada:
// Encendiendo computadora...
// Procesador iniciado.
// RAM cargada.
// Datos guardados en el almacenamiento.
// Computadora encendida.
//evita tener que interactuar directamente con los componentes individuales de la computadora