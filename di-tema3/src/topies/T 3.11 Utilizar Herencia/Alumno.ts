import { Persona } from "./Persona";

// Profesor: Clase de Alumno.
export class Alumno extends Persona{

    private centro: string;
    private curso: string;
    private Asignaturas : string[];
    //-----------------------------------------

    constructor(centro: string,
    curso: string,
    Asignaturas: string[]
        ) 
        {

            this.centro = centro;
            this.curso = curso;
            this.Asignaturas = Asignaturas;

            super()
        }

    //------------------------------------------

    get centro(): string {
        return this.nombre;
    }

    get curso(): string {
        return this.curso;
    }

    get Asignaturas(): string[] {
        return this.Asignaturas;
    }

    //------------------------------------------

    set centro(nuevoCentro: string) {
        this.centro = nuevoCentro;
    }

    set curso(nuevoCurso: string) {
        this.curso = nuevoCurso;
    }

    set Asignaturas(nuevaAsignaturas : string[]) {
        this.Asignaturas = nuevaAsignaturas;
    }

}