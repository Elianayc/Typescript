import personaConLentes from "./personaConLentes";
import personaSana from "./personaSana";
import personaCiega from "./personaCiega";

const personaConLentes1 = new personaConLentes();
const personaSana1 = new personaSana();
const personaCiega1 = new personaCiega();
console.log("---- Persona con lentes ----");
personaConLentes1.mirar();//metodo template salida esperada "Estoy mirando a través de mis lentes"
console.log("---- Persona sana ----");
personaSana1.mirar();//metodo template salida esperada "Estoy mirando con buena vista"
console.log("---- Persona ciega ----");
personaCiega1.mirar();//metodo template salida esperada "No puedo ver nada"

