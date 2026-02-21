export default class presidente{
    
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellido: string;
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    private _titulo: string;
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    //atributo estático que contendrá la única instancia de la clase
    private static _unicaInstancia: presidente;
    //método estático para obtener la única instancia de la clase
    public static get unicaInstancia(): presidente {
        return presidente._unicaInstancia;
    }
    //método estático para crear la única instancia de la clase
    public static nuevoPresidente (pNombre : string, pApellido : string, pTitulo : string) : void {
        presidente._unicaInstancia = new presidente (pNombre, pApellido, pTitulo); // crea la única instancia
    }
    //constructor privado para evitar que se puedan crear instancias desde fuera de la clase
    private constructor(pNombre : string, pApellido : string, pTitulo : string){
        this._nombre = pNombre;
        this._apellido = pApellido;
        this._titulo = pTitulo;
    }
    
    public static presentarse(): void{
        if (!presidente._unicaInstancia){
            console.log("No hay presidente aún.");
            return;
        }
        console.log(`Hola, soy ${presidente._unicaInstancia.titulo} ${presidente._unicaInstancia.nombre} ${presidente._unicaInstancia.apellido}, el presidente de la nación.`);
    }
}