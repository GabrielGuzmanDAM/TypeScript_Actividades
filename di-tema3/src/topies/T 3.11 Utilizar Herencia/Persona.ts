// Persona: Clase de persona.
export class Persona {

    private nombre: string;
    private apellido: string;
    private edad: number;
    private localidad: string;
    private sexo?: "Hombre" | "Mujer";
  

    //-----------------------------------------

    constructor(nombre: string, 
        apellido: string, 
        edad: number, 
        localidad: string, 
        sexo?: "Hombre" | "Mujer"
        ) 
        {

            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.localidad = localidad;
            this.sexo = sexo;

        }

    //------------------------------------------

    get nombre(): string {
        return this.nombre;
    }

    get apellido(): string {
        return this.apellido;
    }

    get edad(): number {
        return this.edad;
    }

    get localidad(): string {
        return this.localidad;
    }

    get sexo(): string {
        return this.sexo;
    }

    //------------------------------------------

    set nombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    set apellido(nuevoApellido: string) {
        this.apellido = nuevoApellido;
    }

    set edad(nuevoEdad: string) {
        this.edad = nuevoEdad;
    }

    set localidad(nuevoLocalidad: string) {
        this.localidad = nuevoLocalidad;
    }

    set sexo(nuevoSexo: string) {
        this.sexo = nuevoSexo;
    }

}