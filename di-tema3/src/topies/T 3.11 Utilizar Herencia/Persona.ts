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

    get getNombre(): string {
        return this.nombre;
    }

    get getApellido(): string {
        return this.apellido;
    }

    get getEdad(): number {
        return this.edad;
    }

    get getLocalidad(): string {
        return this.localidad;
    }

    get getSexo(): "Hombre" | "Mujer" | undefined  {
        return this.sexo;
    }

    //------------------------------------------

    set setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    set setApellido(nuevoApellido: string) {
        this.apellido = nuevoApellido;
    }

    set setEdad(nuevoEdad: number) {
        this.edad = nuevoEdad;
    }

    set setLocalidad(nuevoLocalidad: string) {
        this.localidad = nuevoLocalidad;
    }

    set setSexo(nuevoSexo:  "Hombre" | "Mujer" | undefined) {
        this.sexo = nuevoSexo;
    }

}