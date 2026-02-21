//ejemplo de composite
import Imenu from "./IMenu";
import subMenu from "./subMenu";
import menuPrincipal from "./menuPrincipal";

const menu1 = new subMenu("arroz con pollo");
const menu2 = new subMenu("pasta");
const menu3 = new subMenu("ensalada");

const menuPrincipal1 = new menuPrincipal();
menuPrincipal1.agregar(menu1);
menuPrincipal1.agregar(menu2);
menuPrincipal1.agregar(menu3);

menuPrincipal1.mostrarMenu();