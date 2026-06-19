import { Herramienta } from "./Herramienta";

export class Dron {

    private _velocidadBase: number = 5;
    private _alturaBase: number = 100;
    private _capacidadMax: number = 200;
    private _herramienta?: Herramienta;

    constructor(
        velocidadBase: number,
        alturaBase: number,
        capacidadMax: number,
        herramienta?: Herramienta
    )
    {
        this._velocidadBase = velocidadBase;
        this._alturaBase = alturaBase;
        this._capacidadMax = capacidadMax;
        this._herramienta = herramienta;
    }


    public calcularVelocidad(): number {

        // Si no hay herramienta asignada, el dron mantiene su velocidad base
        if (!this._herramienta) return this._velocidadBase;

        // Obtengo el peso de la herramienta actual
        const peso = this._herramienta.peso;

        // Calculo cuánto excede el peso respecto a la capacidad máxima sin penalización
        const extra = peso - this._capacidadMax;

        // Si no hay exceso de peso, no hay penalización
        if (extra <= 0) return this._velocidadBase;

        // Convierto el exceso de peso en bloques de 50g completos
        const bloques = Math.floor(extra / 50); //Floor solo cuenta enteros.

        // Por cada bloque: -2% de velocidad
        return this._velocidadBase * (1 - 0.02 * bloques);
    }

    public calcularAltura(): number {

        // Si no hay herramienta asignada, el dron mantiene su altura base
        if (!this._herramienta) return this._alturaBase;

        // Obtengo el peso de la herramienta actual
        const peso = this._herramienta.peso;

        // Calculo cuánto excede el peso respecto a la capacidad máxima sin penalización
        const extra = peso - this._capacidadMax;

        // Si no hay exceso de peso, no hay penalización
        if (extra <= 0) return this._alturaBase;

        // Convierto el exceso de peso en bloques de 50g completos
        const bloques = Math.floor(extra / 50); //Floor solo cuenta enteros.

        // Por cada bloque: -5% de altura
        return this._alturaBase * (1 - 0.05 * bloques);

    }   


    public asignarHerramienta(herramienta: Herramienta): void {
        this._herramienta = herramienta;
    }



}