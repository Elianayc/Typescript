import { Document } from "../model/Document";
import { Documento } from "../model/Documento";
import { Escrito } from "../model/Escrito";
import { Ley } from "../model/Ley";
import { DocumentAdapter } from "../adapter/DocumentAdapter";
import { DocumentService } from "../business/DocumentService";

const adapter = new DocumentAdapter();
const service = new DocumentService();

const escrito = new Escrito(
    1001,
    new Date("2026-06-20"),
    "A".repeat(120),
    "Juan Pérez"
);

const documento = new Documento(
    2001,
    new Date("2026-06-15"),
    "B".repeat(80),
    "María Gómez"
);

const ley = new Ley(
    3001,
    new Date("2026-07-01"),
    "C".repeat(150),
    "Congreso Nacional"
);

const documentos: Document[] = [
    adapter.convertir(escrito),
    adapter.convertir(documento),
    adapter.convertir(ley)
];

service.evaluar(documentos);