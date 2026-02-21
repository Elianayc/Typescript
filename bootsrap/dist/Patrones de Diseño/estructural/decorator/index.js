"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agua_1 = __importDefault(require("./agua"));
const conJugo_1 = __importDefault(require("./conJugo"));
const conSorbete_1 = __importDefault(require("./conSorbete"));
const agua1 = new agua_1.default();
console.log(agua1.beber());
console.log(agua1.servir());
console.log("----- Decorador con jugo -----");
const aguaDecorada = new conJugo_1.default(agua1);
console.log(aguaDecorada.beber());
console.log(aguaDecorada.servir());
console.log("----- Decorador con sorbete -----");
const aguaDecorada2 = new conSorbete_1.default(aguaDecorada);
console.log(aguaDecorada2.beber());
console.log(aguaDecorada2.servir());
//# sourceMappingURL=index.js.map