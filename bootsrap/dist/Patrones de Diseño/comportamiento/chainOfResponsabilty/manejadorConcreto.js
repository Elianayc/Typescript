"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractManejador_1 = __importDefault(require("./abstractManejador"));
class ManejadorAutenticacion extends abstractManejador_1.default {
    manejar(peticion) {
        if (peticion === "login") {
            console.log("✅ Usuario autenticado.");
        }
        else {
            super.manejar(peticion);
        }
    }
}
exports.default = ManejadorAutenticacion;
//# sourceMappingURL=manejadorConcreto.js.map