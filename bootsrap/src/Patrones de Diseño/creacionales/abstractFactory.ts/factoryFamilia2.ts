import fabricaAbstracta from "./abstractFactory";
import productoConcretoA from "./productoA";
import productoAbstracto from "./productoAbtracto";
import productoConcretoB from "./productoB";
import productoConcretoC from "./productoC";
import productoConcretoD from "./productoD";

export default class factoryFamilia2 extends fabricaAbstracta {
    public crearProductoA(): productoAbstracto {
        return new productoConcretoC();
    }
    public crearProductoB(): productoAbstracto {
        return new productoConcretoD();
    }
}