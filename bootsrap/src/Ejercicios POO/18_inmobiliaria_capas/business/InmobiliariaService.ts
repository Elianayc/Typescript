
import { InmuebleRepository } from "../data/InmuebleRepository";
import { Inmueble } from "../model/Inmueble";
import { Casa } from "../model/Casa";
import { Departamento } from "../model/Departamento";
import { Direccion } from "../model/Direccion";
import { Contacto } from "../model/Contacto";
import { Ambiente } from "../model/Ambiente";

export class InmobiliariaService {

    private _repositorio: InmuebleRepository

    constructor(
        repositorio: InmuebleRepository
    ) {
        this._repositorio = repositorio;}

    public darDeAltaInmueble(
        tipo: "casa" | "departamento",
        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        observaciones: string,
        tieneGas: boolean,
        tieneCloaca: boolean,
        extras: any
    ):void {

        if (!direccion || !ambientes || ambientes.length === 0 || !contacto) 
        {
            throw new Error("Faltan datos obligatorios");
        }

        if (!contacto.nombre || !contacto.apellido || (!contacto.telefono && !contacto.email)) 
        {
            throw new Error("Contacto inválido");
        }

        let inmueble: Inmueble;

        if (tipo === "casa") {
            inmueble = new Casa(
                direccion,
                ambientes,
                contacto,
                tieneGas,
                tieneCloaca,
                observaciones,
                extras.tieneQuincho,
                extras.tienePileta
            );
        } else {
            inmueble = new Departamento(
                direccion,
                ambientes,
                contacto,
                tieneGas,
                tieneCloaca,
                observaciones,
                extras.piso,
                extras.letra,
                extras.admiteMascota
            );
        }

        this._repositorio.agregar(inmueble);
    }


    public listarInmuebles(): Inmueble[] {
        return this._repositorio.listar();
    }

}
