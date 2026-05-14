import { Documento } from "./Documento";

//Clase SistemaDocumentos que gestiona documentos y sus versiones
export class SistemaDocumentos {

    //Atributos privados para almacenar documentos activos y sus versiones
    private documentosActivos: Map<string, Documento> = new Map();
    private versiones: Map<string, Documento[]> = new Map();

    //Método para crear documentos
    crearDocumento(doc: Documento): void {
        //Valida el documento antes de agregarlo
        if (!doc.validar()) throw new Error("Documento no válido");

        //Agrega el documento a los activos y crea su historial de versiones
        this.documentosActivos.set(doc.id, doc);
        this.versiones.set(doc.id, [doc.copiar()]);
    }

    //Método para editar un documento
    editarDocumento(id: string, nuevoContenido: string): boolean {

        // Obtengo el documento activo
        const doc = this.documentosActivos.get(id);
        if (!doc) return false;

        // Creo una copia temporal para validar antes de guardar
        const copia = doc.copiar();
        copia.editar(nuevoContenido);
        if (!copia.validar()) throw new Error("Contenido inválido para este tipo de documento");

        // Si pasa validación, aplico los cambios y guardo la nueva versión
        doc.editar(nuevoContenido);
        this.versiones.get(id)!.push(doc.copiar());
        return true;
    }

    //Método para restaurar una versión por número (no por id)
    restaurarVersion(id: string, nroVersion: number): Documento {

        //Obtengo la versión específica
        const version = this.verVersion(id, nroVersion);

        //Actualizo el documento activo con esa versión
        this.documentosActivos.set(id, version.copiar());
        return version;
    }

    //Método para ver una versión específica de un documento
    verVersion(id: string, nroVersion: number): Documento {
        const historial = this.versiones.get(id);

        //Valido que el documento y la versión existan
        if (!historial) throw new Error("No existe el documento");
        if (nroVersion < 1 || nroVersion > historial.length) throw new Error("No existe esa versión");

        //Devuelvo una copia de la versión solicitada   
        return historial[nroVersion - 1].copiar();
    }

    //Método para ver las últimas 10 versiones
    verUltimas10Versiones(id: string): Documento[] {

        //Obtengo el historial de versiones
        const historial = this.versiones.get(id);
        if (!historial) return [];

        //Devuelvo las últimas 10 versiones como copias
        const resultado: Documento[] = [];
        const inicio = historial.length > 10 ? historial.length - 10 : 0;

        // Recorro desde el índice hasta el final del historial
        for (let i = inicio; i < historial.length; i++) {
            resultado.push(historial[i].copiar());
        }
        
        return resultado;
    }

}