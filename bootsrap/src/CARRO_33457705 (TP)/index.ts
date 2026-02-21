import { Documento } from "./Documento";
import { Encriptacion } from "./Encriptacion";
import { Compresion } from "./Compresion";      


function main() {

    const documento = new Documento("Texto de ejemplo", new Encriptacion());

    //Muestro el procesamiento con la estrategia actual.
    console.log("Resultado del procesamiento:", documento.procesar());

    //Cambio la estrategia a Compresión y proceso de nuevo.
    documento.setEstrategiaProceso(new Compresion());

    //Muestro el procesamiento con la nueva estrategia.
    console.log("Resultado del procesamiento:", documento.procesar());


}

main()