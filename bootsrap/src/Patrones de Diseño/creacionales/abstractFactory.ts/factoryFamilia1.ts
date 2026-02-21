import fabricaAbstracta from "./abstractFactory";
import productoConcretoA from "./productoA";
import productoAbstracto from "./productoAbtracto";
import productoConcretoB from "./productoB";

export default class factoryFamilia1 extends fabricaAbstracta {
    public crearProductoA(): productoAbstracto {
        return new productoConcretoA();
    }
    public crearProductoB(): productoAbstracto {
        return new productoConcretoB();
    }
}