"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractTemplate_1 = __importDefault(require("./abstractTemplate"));
class personaSana extends abstractTemplate_1.default {
    abrirOjos() {
        console.log("abriendo los ojos");
    }
    ver() {
        console.log("tengo buena vista");
    }
    cerrarOjos() {
        console.log("cerrando los ojos");
    }
}
exports.default = personaSana;
//# sourceMappingURL=personaSana.js.map