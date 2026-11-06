import { Jugador } from "./Jugador";

export class Equipo{

    private nombre!: string;
    private Jugadores!: Jugador[];

    //-----------------------------------------

    constructor(
        nombre: string,
        Jugadores: Jugador[]
        ) 
        {
            this.setNombre = nombre;
            this.setJugadores  = Jugadores;
        }

    //------------------------------------------

    get getNombre(): string {
        return this.nombre;
    }

    get getJugadores(): Jugador[] {
        return this.Jugadores;
    }

    //------------------------------------------

    set setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    set setJugadores(nuevosJugadores: Jugador[]) {
        if (nuevosJugadores.length > 2) {
            throw new Error("Un equipo no puede tener más de dos jugadores");
        }

        this.Jugadores = nuevosJugadores;
    }
}