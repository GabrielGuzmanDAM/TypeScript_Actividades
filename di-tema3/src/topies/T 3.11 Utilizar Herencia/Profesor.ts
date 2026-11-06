import { Persona } from "./Persona";

// Profesor: Clase de Profesor.
export class Profesor extends Persona{

    private centro: string;
    private especialidad: string;
    private departamento: string;
    //-----------------------------------------

    constructor(
        centro: string,
        especialidad: string,
        departamento: string,
        nombre: string, 
        apellido: string, 
        edad: number, 
        localidad: string, 
        sexo?: "Hombre" | "Mujer"
        ) 
        {
            super(nombre, apellido, edad, localidad, sexo)

            this.centro = centro;
            this.especialidad = especialidad;
            this.departamento = departamento;
        }

    //------------------------------------------

    get getCentro(): string {
        return this.centro;
    }

    get getEspecialidad(): string {
        return this.especialidad;
    }

    get getDepartamento(): string {
        return this.departamento;
    }

    //------------------------------------------

    set setCentro(nuevoCentro: string) {
        this.centro = nuevoCentro;
    }

    set setEspecialidad(nuevoEspecialidad: string) {
        this.especialidad = nuevoEspecialidad;
    }

    set setDepartamento(nuevosDepartamento: string) {
        this.departamento = nuevosDepartamento;
    }

}