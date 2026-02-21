"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabricaAbstracta_1 = __importDefault(require("./fabricaAbstracta"));
const productoConcretoA_1 = __importDefault(require("./productoConcretoA"));
class fabricaConcretaA extends fabricaAbstracta_1.default {
    crearProducto() {
        return new productoConcretoA_1.default("Producto A", 100);
    }
}
exports.default = fabricaConcretaA;
//# sourceMappingURL=FabricaConcretaA.js.map