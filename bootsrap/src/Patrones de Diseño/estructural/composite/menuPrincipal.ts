import Imenu from "./IMenu";
import subMenu from "./subMenu";

export default class menuPrincipal implements Imenu {
    private menus: subMenu[] = [];

    agregar(nombreMenu: subMenu): void {
        this.menus.push(nombreMenu);
    }
    mostrarMenu(): void {
        for (const menu of this.menus) {
            menu.mostrarMenu();
        }
    }

}