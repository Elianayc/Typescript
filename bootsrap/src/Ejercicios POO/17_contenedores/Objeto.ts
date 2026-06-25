import { Estado } from "./Estado";
import { Material } from "./Material";

class Objeto {

    _material: Material;
    _volumen: number;
    _listaContenido: Objeto[];
    _contenedor: Objeto | null;
    _estado: Estado;

    constructor(
        material: Material,
        volumen: number,
        listaContenido: Objeto[],
        contenedor: Objeto | null,
        estado: Estado = Estado.simple
    ){
        this._material = material;
        this._volumen = volumen;
        this._listaContenido = listaContenido;
        this._contenedor = contenedor;
        this._estado = estado;
    }


    public agregarObjeto(objeto: Objeto) {
        this._listaContenido.push(objeto);
        objeto._contenedor = this;
    }

    removerObjeto(objeto: Objeto) {
        const i = this._listaContenido.indexOf(objeto);

        if (i !== -1) {
            this._listaContenido.splice(i, 1);
            objeto._contenedor = null;
        }
    }

    public calcularEstado(): Estado {
        if (this._listaContenido.length === 0 && this._contenedor === null)
            this._estado = Estado.simple;

        else if (this._listaContenido.length === 0 && this._contenedor !== null)
            this._estado = Estado.contenido;

        else if (this._listaContenido.length > 0 && this._contenedor === null)
            this._estado = Estado.contenedor;

        else
            this._estado = Estado.ambos;

        return this._estado;
    }

    public toString(): string {
        this.calcularEstado();

        return `
            Objeto:
                Material: ${this._material}
                Volumen: ${this._volumen}
                Estado: ${this._estado}
                Contenedor: ${this._contenedor ? "Sí" : "No"}
                Contenido: ${this._listaContenido.length} objetos
        `;
    }

}