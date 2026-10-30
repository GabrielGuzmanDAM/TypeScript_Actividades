import "./Expediente";


// Estudiante: Clase de estudiantes.
export class Estudiante {

    private nombre: string;
    private apellido: string;
    private edad: number;
    private localidad: string;
    private expediente: Expediente;
    private sexo?: "Hombre" | "Mujer";
  

    //-----------------------------------------

    constructor(nombre: string, 
        apellido: string, 
        edad: number, 
        localidad: string, 
        expediente: Expediente,
        sexo?: "Hombre" | "Mujer"
        ) 
        {

            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.localidad = localidad;
            this.expediente = expediente;
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

    get expediente(): Expediente {
        return this.expediente;
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

    set expediente(nuevoExpediente: string) {
        this.expediente = nuevoExpediente;
    }

}