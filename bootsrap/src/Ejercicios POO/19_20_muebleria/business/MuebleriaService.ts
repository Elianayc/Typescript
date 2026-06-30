import { Articulo } from "../model/Articulo";
import { ListaDePrecios } from "../model/ListaDePrecios";
import { PrecioPorArticulo } from "../model/PrecioPorArticulo";

export class MuebleriaService {

      private _listaMinorista: ListaDePrecios;
      private _listaMayorista: ListaDePrecios;

      constructor() {
            this._listaMinorista = new ListaDePrecios(
                  "Precios Minorista",
                  new Date(),
                  false,
                  []
            );
            this._listaMayorista = new ListaDePrecios(
                  "Precios Mayorista",
                  new Date(),
                  true,
                  []
            );
      }

      public get listaMinorista(): ListaDePrecios {
            return this._listaMinorista;
      }

      public get listaMayorista(): ListaDePrecios {
            return this._listaMayorista;
      }

      public CargarArticulo(
            nombre: string,
            costoDeProduccion: number,
            precioMayoristaIngresado: number,
            precioMinoristaIngresado: number,
            observacion?: string
      ) {
            if (nombre.length > 15) {
                  throw new Error("Nombre demasiado largo");
            }

            if (costoDeProduccion <= 0) {
                  throw new Error("Costo inválido");
            }

            if (observacion && observacion.length > 30) {
                  throw new Error("Observación demasiado larga");
            }

            const articulo = new Articulo(nombre, costoDeProduccion, observacion);

            if (precioMinoristaIngresado < precioMayoristaIngresado * 1.3) {
                  precioMinoristaIngresado = precioMayoristaIngresado * 1.3;
            }

            const precioMayorista = new PrecioPorArticulo(precioMayoristaIngresado, articulo);
            const precioMinorista = new PrecioPorArticulo(precioMinoristaIngresado, articulo);

            this._listaMayorista.precioPorArticulo.push(precioMayorista);
            this._listaMinorista.precioPorArticulo.push(precioMinorista);
            
      }
      
      public ListarPrecioMayorista(articulo: Articulo): number | undefined {

            const registro = this._listaMayorista.precioPorArticulo.find(
                  //Para cada item.articulo, chequeo si encuentro el artículo.
                  item => item.articulo === articulo
            );
            //Si el registro existe: "registro?" lo devuelvo.
            return registro?.precio;
      }

      public ListarPrecioMinorista(articulo: Articulo): number | undefined {
            const registro = this._listaMinorista.precioPorArticulo.find(
                  item => item.articulo === articulo
            );
            return registro?.precio;
      }

}