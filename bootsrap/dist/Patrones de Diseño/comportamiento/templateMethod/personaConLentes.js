"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractTemplate_1 = __importDefault(require("./abstractTemplate"));
class personaConLentes extends abstractTemplate_1.default {
    abrirOjos() {
        console.log("abriendo los ojos");
    }
    ver() {
        console.log("no tengo buena vista, uso lentes");
    }
    cerrarOjos() {
        console.log("cerrando los ojos");
    }
}
exports.default = personaConLentes;
//# sourceMappingURL=personaConLentes.js.map