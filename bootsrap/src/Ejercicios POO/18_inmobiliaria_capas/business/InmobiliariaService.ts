import { InmuebleRepository } from "../data/InmuebleRepository";
import { Inmueble } from "../model/Inmueble";
import { Casa } from "../model/Casa";
import { Departamento } from "../model/Departamento";
import { Direccion } from "../model/Direccion";
import { Contacto } from "../model/Contacto";
import { Ambiente } from "../model/Ambiente";

export class InmobiliariaService {

    private _repositorio: InmuebleRepository;

    constructor(repositorio: InmuebleRepository) {
        this._repositorio = repositorio;
    }

    public altaDireccion(

        provincia: string,
        barrio: string,
        calle: string,
        altura: number,
        codigoPostal: string,
        esBarrioPrivado: boolean

    ): Direccion {

        if (
            !provincia ||
            !barrio ||
            !calle ||
            altura <= 0 ||
            !codigoPostal
        ) {
            throw new Error("Dirección inválida");
        }

        return new Direccion(

            provincia,
            barrio,
            calle,
            altura,
            codigoPostal,
            esBarrioPrivado

        );
    }

    public altaContacto(

        nombre: string,
        apellido: string,
        telefono: string,
        email: string

    ): Contacto {

        if (
            !nombre ||
            !apellido ||
            (!telefono && !email)
        ) {
            throw new Error("Contacto inválido");
        }

        return new Contacto(

            nombre,
            apellido,
            telefono,
            email

        );
    }

    public altaAmbiente(

        tipo: string,
        ancho: number,
        largo: number,
        esLuminoso: boolean

    ): Ambiente {

        if (
            !tipo ||
            ancho <= 0 ||
            largo <= 0
        ) {
            throw new Error("Ambiente inválido");
        }

        return new Ambiente(
            tipo,
            ancho,
            largo,
            esLuminoso
        );
    }

    public altaCasa(

        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        tieneGas: boolean,
        tieneCloaca: boolean,
        observaciones: string,
        tieneQuincho: boolean,
        tienePileta: boolean

    ): void {

        const casa = new Casa(

            direccion,
            ambientes,
            contacto,
            tieneGas,
            tieneCloaca,
            observaciones,
            tieneQuincho,
            tienePileta

        );

        this._repositorio.agregar(casa);
    }

    public altaDepartamento(

        direccion: Direccion,
        ambientes: Ambiente[],
        contacto: Contacto,
        tieneGas: boolean,
        tieneCloaca: boolean,
        observaciones: string,
        piso: number,
        letra: string,
        admiteMascota: boolean

    ): void {

        const departamento = new Departamento(

            direccion,
            ambientes,
            contacto,
            tieneGas,
            tieneCloaca,
            observaciones,
            piso,
            letra,
            admiteMascota

        );

        this._repositorio.agregar(departamento);
    }


    public listarInmuebles(): Inmueble[] {
        return this._repositorio.listar();
    }
    
}