"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractFactory_1 = __importDefault(require("./abstractFactory"));
const productoA_1 = __importDefault(require("./productoA"));
const productoB_1 = __importDefault(require("./productoB"));
class factoryFamilia1 extends abstractFactory_1.default {
    crearProductoA() {
        return new productoA_1.default();
    }
    crearProductoB() {
        return new productoB_1.default();
    }
}
exports.default = factoryFamilia1;
//# sourceMappingURL=factoryFamilia1.js.map