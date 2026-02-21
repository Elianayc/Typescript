"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productoAbtracto_1 = __importDefault(require("./productoAbtracto"));
class productoConcretoA extends productoAbtracto_1.default {
    constructor() {
        super("Producto Concreto A");
    }
}
exports.default = productoConcretoA;
//# sourceMappingURL=productoA.js.map