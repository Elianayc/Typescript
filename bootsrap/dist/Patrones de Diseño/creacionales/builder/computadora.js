"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class computadora {
    partes = [];
    agregarParte(parte) {
        this.partes.push(parte);
    }
    mostrarPartes() {
        console.log("Partes de la computadora:");
        for (const parte of this.partes) {
            console.log(`- ${parte}`);
        }
    }
}
exports.default = computadora;
//# sourceMappingURL=computadora.js.map