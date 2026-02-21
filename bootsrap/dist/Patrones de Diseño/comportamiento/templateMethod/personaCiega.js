"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractTemplate_1 = __importDefault(require("./abstractTemplate"));
class personaCiega extends abstractTemplate_1.default {
    abrirOjos() {
        console.log("los abro pero no veo nada");
    }
    ver() {
        console.log("no puedo ver");
    }
    cerrarOjos() {
        console.log("los cierro pero no veo nada");
    }
}
exports.default = personaCiega;
//# sourceMappingURL=personaCiega.js.map