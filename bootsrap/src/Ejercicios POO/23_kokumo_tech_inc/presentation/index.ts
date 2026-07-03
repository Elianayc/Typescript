import { Document } from "../model/Surveillance";
import { FlyingGr0n3 } from "../model/FlyingGr0n3";
import { Escrito } from "../model/FalderPerr177";
import { Ley } from "../model/Ley";
import { SurveillanceAdapterService } from "../adapter/SurveillanceAdapterService";
import { DocumentService } from "../business/DocumentService";

const adapter = new SurveillanceAdapterService();
const service = new DocumentService();

const escrito = new Escrito(
    1001,
    new Date("2026-06-20"),
    "A".repeat(120),
    "Juan Pérez"
);

const documento = new FlyingGr0n3(
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
    adapter.fetchSurveillanceData(escrito),
    adapter.fetchSurveillanceData(documento),
    adapter.fetchSurveillanceData(ley)
];

service.evaluar(documentos);