import { Document } from "../model/Document";
import { Escrito } from "../model/Escrito";
import { Documento } from "../model/Documento";
import { Ley } from "../model/Ley";

export class DocumentAdapter {

    public convertir(origen: Escrito | Documento | Ley): Document {

        if (origen instanceof Escrito) {
            return new Document(
                origen.legajo,
                origen.erogacion,
                origen.cuerpo,
                origen.autor
            );
        }

        if (origen instanceof Documento) {
            return new Document(
                origen.expediente,
                origen.lanzamiento,
                origen.contenido,
                origen.nombre
            );
        }

        // Ley
        return new Document(
            origen.folio,
            origen.emision,
            origen.desarrollo,
            origen.firmante
        );
    }
}