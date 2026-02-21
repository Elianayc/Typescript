"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorAbstract_1 = __importDefault(require("./DecoratorAbstract"));
class ConJugo extends DecoratorAbstract_1.default {
    beber() {
        return `${super.beber()} con jugo`;
    }
    servir() {
        return `${super.servir()} con jugo`;
    }
}
exports.default = ConJugo;
//# sourceMappingURL=conJugo.js.map