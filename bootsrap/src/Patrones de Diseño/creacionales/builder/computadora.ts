export default  class computadora{
    private partes: string[] = [];

    agregarParte(parte: string): void {
        this.partes.push(parte);
    }

    mostrarPartes(): void {
        console.log("Partes de la computadora:");
        
        // Recorre y muestra cada parte agregada
        for (const parte of this.partes) {
            console.log(`- ${parte}`);
        }
    }
}