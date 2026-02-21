import presidente from "./singletonProfe";


console.log(presidente.presentarse()); // No hay presidente aún.

presidente.nuevoPresidente("Juan", "Pérez", "Sr.");

console.log(presidente.presentarse()); // Hola, soy Sr. Juan Pérez, el presidente de la nación.


//quiero cambiar el presidente
presidente.nuevoPresidente("Ana", "Gómez", "Sra.");

console.log(presidente.presentarse()); // Hola, soy Sra. Ana Gómez, el presidente de la nación.