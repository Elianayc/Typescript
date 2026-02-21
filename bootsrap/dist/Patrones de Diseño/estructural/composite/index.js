"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subMenu_1 = __importDefault(require("./subMenu"));
const menuPrincipal_1 = __importDefault(require("./menuPrincipal"));
const menu1 = new subMenu_1.default("arroz con pollo");
const menu2 = new subMenu_1.default("pasta");
const menu3 = new subMenu_1.default("ensalada");
const menuPrincipal1 = new menuPrincipal_1.default();
menuPrincipal1.agregar(menu1);
menuPrincipal1.agregar(menu2);
menuPrincipal1.agregar(menu3);
menuPrincipal1.mostrarMenu();
//# sourceMappingURL=index.js.map