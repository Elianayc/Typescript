import fabricaAbstracta from "./fabricaAbstracta";
import ProductoAbstracto from "./productoAbstracto";

import ProductoConcretoA from "./productoConcretoA";

export default class fabricaConcretaA extends fabricaAbstracta {
    public crearProducto(): ProductoAbstracto {
        return new ProductoConcretoA("Producto A", 100);
    }

}
