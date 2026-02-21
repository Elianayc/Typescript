"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorAbstract_1 = __importDefault(require("./DecoratorAbstract"));
class ConSorbete extends DecoratorAbstract_1.default {
    beber() {
        return `${super.beber()} con sorbete`;
    }
    servir() {
        return `${super.servir()} con sorbete`;
    }
}
exports.default = ConSorbete;
//# sourceMappingURL=conSorbete.js.map