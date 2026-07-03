import { Document } from "../model/Document";

export class DocumentService {


    public evaluar(documentos: Document[]): void {
        
        documentos.forEach(document => {

            if (
                document.id &&
                document.responsible &&
                document.body.length >= 100 &&
                document.issueDate <= new Date()
            ) {
                console.log("Aprobado.");
            } else {
                console.log("Rechazado.");
            }

        });

    }

}