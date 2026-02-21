"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ninja_1 = require("./Ninja");
function main() {
    const ninja1 = new Ninja_1.Ninja("Karate", "Katana", 200, 100);
    const ninja2 = new Ninja_1.Ninja("Sumo", "Espada", 400, 300);
    ninja1.saltar(5);
    ninja2.saltar(8);
    ninja1.ataque();
    ninja2.ataque();
}
main();
//# sourceMappingURL=index.js.map