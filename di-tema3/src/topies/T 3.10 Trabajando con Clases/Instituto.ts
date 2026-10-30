import "./Estudiante";


// Estudiante: Clase de estudiantes.
export class Instituto {

    private centro: string;
    private localidad: string;
    private estudiantes: Estudiante[];
    //-----------------------------------------

    constructor(centro: string,
    localidad: string,
    estudiantes: Estudiante[]
        ) 
        {

            this.centro = centro;
            this.localidad = localidad;
            this.estudiantes = estudiantes;
        }

    //------------------------------------------

    get centro(): string {
        return this.nombre;
    }

    get localidad(): string {
        return this.localidad;
    }

    get estudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    //------------------------------------------

    set centro(nuevoCentro: string) {
        this.centro = nuevoCentro;
    }

    set localidad(nuevoLocalidad: string) {
        this.localidad = nuevoLocalidad;
    }

    set estudiantes(nuevosEstudiantes: Estudiante[]) {
        this.estudiantes = nuevosEstudiantes;
    }

}