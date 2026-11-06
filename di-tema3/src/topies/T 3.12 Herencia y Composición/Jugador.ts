import { Persona } from "./Persona";

export class Jugador extends Persona {

    private categoria!: "1"|"2"|"3"|"4"|"5"|"6";

    //-----------------------------------------

    constructor(
        nombre: string, 
        apellido: string, 
        genero: "Hombre" | "Mujer", 
        telefono: number,
        direccion: string,
        categoria: "1"|"2"|"3"|"4"|"5"|"6"
        ) 
        {
            super(nombre, apellido, genero, telefono, direccion)

            this.setCategoria = categoria;
        }

    //------------------------------------------

    get getCategoria(): "1"|"2"|"3"|"4"|"5"|"6" {
        return this.categoria;
    }

    //------------------------------------------

    set setCategoria(nuevaCategoria: "1"|"2"|"3"|"4"|"5"|"6") {
        this.categoria = nuevaCategoria;
    }
}