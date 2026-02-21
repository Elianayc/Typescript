"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class menuPrincipal {
    menus = [];
    agregar(nombreMenu) {
        this.menus.push(nombreMenu);
    }
    mostrarMenu() {
        for (const menu of this.menus) {
            menu.mostrarMenu();
        }
    }
}
exports.default = menuPrincipal;
//# sourceMappingURL=menuPrincipal.js.map