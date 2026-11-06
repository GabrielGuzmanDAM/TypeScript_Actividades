import { Persona } from "./Persona";

// Profesor: Clase de Alumno.
export class Alumno extends Persona{

    private centro: string;
    private curso: string;
    private asignaturas : string[];
    //-----------------------------------------

    constructor(centro: string,
    curso: string,
    asignaturas: string[],
    nombre: string, 
        apellido: string, 
        edad: number, 
        localidad: string, 
        sexo?: "Hombre" | "Mujer"
        ) 
        {
            
            super(nombre, apellido, edad, localidad, sexo)


            this.centro = centro;
            this.curso = curso;
            this.asignaturas = asignaturas;
        }

    //------------------------------------------

    get getCentro(): string {
        return this.centro;
    }

    get getCurso(): string {
        return this.curso;
    }

    get getAsignaturas(): string[] {
        return this.asignaturas;
    }

    //------------------------------------------

    set setCentro(nuevoCentro: string) {
        this.centro = nuevoCentro;
    }

    set setCurso(nuevoCurso: string) {
        this.curso = nuevoCurso;
    }

    set setAsignaturas(nuevaAsignaturas : string[]) {
        this.asignaturas = nuevaAsignaturas;
    }

}