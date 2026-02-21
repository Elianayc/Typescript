"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singletonProfe_1 = __importDefault(require("./singletonProfe"));
console.log(singletonProfe_1.default.presentarse());
singletonProfe_1.default.nuevoPresidente("Juan", "Pérez", "Sr.");
console.log(singletonProfe_1.default.presentarse());
singletonProfe_1.default.nuevoPresidente("Ana", "Gómez", "Sra.");
console.log(singletonProfe_1.default.presentarse());
//# sourceMappingURL=index.js.map