import { Persona } from "./Persona";

// Profesor: Clase de Profesor.
export class Profesor extends Persona{

    private centro: string;
    private especialidad: string;
    private departamento: string;
    //-----------------------------------------

    constructor(centro: string,
    especialidad: string,
    departamento: string
        ) 
        {

            this.centro = centro;
            this.especialidad = especialidad;
            this.departamento = departamento;

            super()
        }

    //------------------------------------------

    get centro(): string {
        return this.nombre;
    }

    get especialidad(): string {
        return this.especialidad;
    }

    get departamento(): string {
        return this.departamento;
    }

    //------------------------------------------

    set centro(nuevoCentro: string) {
        this.centro = nuevoCentro;
    }

    set especialidad(nuevoEspecialidad: string) {
        this.especialidad = nuevoEspecialidad;
    }

    set departamento(nuevosDepartamento: string) {
        this.departamento = nuevosDepartamento;
    }

}