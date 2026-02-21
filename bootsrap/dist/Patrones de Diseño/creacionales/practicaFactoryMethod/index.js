"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaConcretaA_1 = __importDefault(require("./FabricaConcretaA"));
const fabricaA = new FabricaConcretaA_1.default();
const productoA = fabricaA.crearProducto();
console.log(productoA.mostrarInfo());
//# sourceMappingURL=index.js.map