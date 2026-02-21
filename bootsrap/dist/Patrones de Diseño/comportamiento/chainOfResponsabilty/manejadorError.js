"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractManejador_1 = __importDefault(require("./abstractManejador"));
class ManejadorError extends abstractManejador_1.default {
    manejar(peticion) {
        console.log("❌ Solicitud desconocida:", peticion);
    }
}
exports.default = ManejadorError;
//# sourceMappingURL=manejadorError.js.map