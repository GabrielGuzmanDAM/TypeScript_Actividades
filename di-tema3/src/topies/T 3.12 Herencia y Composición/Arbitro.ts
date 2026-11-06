import { Persona } from "./Persona";

export class Arbitro extends Persona {

    private numeroColegiado!: number;

    //-----------------------------------------

    constructor(
        nombre: string, 
        apellido: string, 
        genero: "Hombre" | "Mujer", 
        telefono: number,
        direccion: string,
        numeroColegiado: number
        ) 
        {
            super(nombre, apellido, genero, telefono, direccion)

            this.setNumeroColegiado = numeroColegiado;
        }

    //------------------------------------------

    get getNumeroColegiado(): number {
        return this.numeroColegiado;
    }

    //------------------------------------------

    set setNumeroColegiado(nuevoNumeroColegiado: number) {
        this.numeroColegiado = nuevoNumeroColegiado;
    }
}