import productoAbstracto from "./productoAbtracto";

export default abstract class fabricaAbstracta {
    public abstract crearProductoA(): productoAbstracto;
    public abstract crearProductoB(): productoAbstracto;

}