import { BancoService } from "../business/BancoService";

const bancoService = new BancoService();

bancoService.evaluarAptoPrestamo(
    "12345678", // DNI
    50000,      // Sueldo bruto
    5           // Antigüedad en el empleo actual (años)
);