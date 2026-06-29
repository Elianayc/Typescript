import { Articulo } from "../model/Articulo";
import { ListaDePrecios } from "../model/ListaDePrecios";
import { PrecioPorArticulo } from "../model/PrecioPorArticulo";

export class MuebleriaService {

  private _listaMinorista: ListaDePrecios;
  private _listaMayorista: ListaDePrecios;

  constructor(
        listaMinorista: ListaDePrecios,
        listaMayorista: ListaDePrecios
  ) {
        this._listaMinorista = listaMinorista;
        this._listaMayorista = listaMayorista;
  }

  public CargarArticulo(
        nombre: string,
        costoDeProduccion: number,
        observacion: string,
        precioMayorista: number,
        precioMinorista: number
  ) {
        const articulo = new Articulo(nombre, costoDeProduccion, observacion);

        const registroMayorista = new PrecioPorArticulo(precioMayorista, articulo);
        const registroMinorista = new PrecioPorArticulo(precioMinorista, articulo);

        this._listaMayorista.precioPorArticulo.push(registroMayorista);
        this._listaMinorista.precioPorArticulo.push(registroMinorista);
  }

}