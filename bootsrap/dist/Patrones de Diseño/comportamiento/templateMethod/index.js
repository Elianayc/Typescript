"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personaConLentes_1 = __importDefault(require("./personaConLentes"));
const personaSana_1 = __importDefault(require("./personaSana"));
const personaCiega_1 = __importDefault(require("./personaCiega"));
const personaConLentes1 = new personaConLentes_1.default();
const personaSana1 = new personaSana_1.default();
const personaCiega1 = new personaCiega_1.default();
console.log("---- Persona con lentes ----");
personaConLentes1.mirar();
console.log("---- Persona sana ----");
personaSana1.mirar();
console.log("---- Persona ciega ----");
personaCiega1.mirar();
//# sourceMappingURL=index.js.map