"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractManejador_1 = __importDefault(require("./abstractManejador"));
class ManejadorAutorizacion extends abstractManejador_1.default {
    manejar(peticion) {
        if (peticion === "permiso") {
            console.log("🔐 Usuario autorizado.");
        }
        else {
            super.manejar(peticion);
        }
    }
}
exports.default = ManejadorAutorizacion;
//# sourceMappingURL=manejadorConcreto2.js.map