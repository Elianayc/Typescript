import { MuebleriaService } from "../business/MuebleriaService";

// ================ CREAR SERVICIO ================
const muebleriaService = new MuebleriaService();

// ================ CARGAR ARTÍCULOS ================
muebleriaService.CargarArticulo("Silla de Madera", 80, 120, 150, "Silla clásica de roble");
muebleriaService.CargarArticulo("Mesa de Comedor", 300, 450, 600, "Mesa extensible para 6 personas");
muebleriaService.CargarArticulo("Armario de 4 Puertas", 500, 750, 1000);
muebleriaService.CargarArticulo("Estantería Modular", 200, 320, 400, "Ajustable, con 5 niveles");
muebleriaService.CargarArticulo("Cama Matrimonial", 800, 1200, 1500, "Con base de madera maciza");
muebleriaService.CargarArticulo("Sofá 3 Cuerpos", 1200, 1800, 2200, "Tapizado en tela resistente");

// ================ MOSTRAR LISTAS ================
const listaMinorista = muebleriaService.listaMinorista;
const listaMayorista = muebleriaService.listaMayorista;

console.log("\n========== LISTA MINORISTA ==========");
console.log(`Nombre: ${listaMinorista.nombre}`);
console.log(`Tipo: ${listaMinorista.esMayorista ? 'Mayorista' : 'Minorista'}`);
console.log(`Vigencia: ${listaMinorista.fechaDeVigencia.toLocaleDateString('es-AR')}`);
console.log(`\nArtículos:`);

listaMinorista.precioPorArticulo.forEach((item, index) => {
    console.log(
        `  ${index + 1}. ${item.articulo.nombre} - ` +
        `Costo: $${item.articulo.costoDeProduccion} - ` +
        `Precio Venta: $${muebleriaService.ListarPrecioMinorista(item.articulo)} - ` +
        `Ganancia: $${muebleriaService.ListarPrecioMinorista(item.articulo)! - item.articulo.costoDeProduccion} - ` +
        `Obs: ${item.articulo.observacion || 'Sin observaciones'}`
    );
});

console.log("\n========== LISTA MAYORISTA ==========");
console.log(`Nombre: ${listaMayorista.nombre}`);
console.log(`Tipo: ${listaMayorista.esMayorista ? 'Mayorista' : 'Minorista'}`);
console.log(`Vigencia: ${listaMayorista.fechaDeVigencia.toLocaleDateString('es-AR')}`);
console.log(`\nArtículos:`);

listaMayorista.precioPorArticulo.forEach((item, index) => {
    console.log(
        `  ${index + 1}. ${item.articulo.nombre} - ` +
        `Costo: $${item.articulo.costoDeProduccion} - ` +
        `Precio Venta: $${muebleriaService.ListarPrecioMayorista(item.articulo)} - ` +
        `Ganancia: $${muebleriaService.ListarPrecioMayorista(item.articulo)! - item.articulo.costoDeProduccion} - ` +
        `Obs: ${item.articulo.observacion || 'Sin observaciones'}`
    );
});


