import { Arbitro } from './Arbitro';
import { Equipo } from "./Equipo";

export interface Set {

    puntosEquipo1: number;
    puntosEquipo2: number;
}

export interface Partido {
    equipo1: Equipo;
    equipo2: Equipo;
    arbitro: Arbitro;
    fecha: Date;
    recinto: string;
    pista: number;
    set: Set[];
}