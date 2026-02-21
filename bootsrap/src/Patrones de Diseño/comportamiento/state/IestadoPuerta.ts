export default interface IestadoPuerta {
    abrir(): void;
    cerrar(): void;
    bloquear(): void;
    desbloquear(): void;
}