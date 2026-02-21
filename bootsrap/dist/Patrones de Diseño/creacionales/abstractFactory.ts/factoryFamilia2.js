"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractFactory_1 = __importDefault(require("./abstractFactory"));
const productoC_1 = __importDefault(require("./productoC"));
const productoD_1 = __importDefault(require("./productoD"));
class factoryFamilia2 extends abstractFactory_1.default {
    crearProductoA() {
        return new productoC_1.default();
    }
    crearProductoB() {
        return new productoD_1.default();
    }
}
exports.default = factoryFamilia2;
//# sourceMappingURL=factoryFamilia2.js.map