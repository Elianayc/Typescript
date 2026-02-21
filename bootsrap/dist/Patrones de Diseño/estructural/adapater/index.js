"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adaptadorCuadradoCirculo_1 = __importDefault(require("./adaptadorCuadradoCirculo"));
const formaCuadrada_1 = __importDefault(require("./formaCuadrada"));
const formaCuadrada = new formaCuadrada_1.default();
const adaptador = new adaptadorCuadradoCirculo_1.default(formaCuadrada);
console.log(adaptador.rodar());
//# sourceMappingURL=index.js.map