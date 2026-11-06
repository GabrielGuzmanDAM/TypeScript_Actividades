import type { Equipo } from './Equipo';
import type { Arbitro } from './Arbitro';
import type { Set } from './Set';

export class Partido {
    equipo1: Equipo;
    equipo2: Equipo;
    arbitro: Arbitro;
    fecha: Date;
    recinto: string;
    pista: number;
    set: Set[];

    constructor(
        equipo1: Equipo,
        equipo2: Equipo,
        arbitro: Arbitro,
        fecha: Date,
        recinto: string,
        pista: number,
        set: Set[]
    ) {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.arbitro = arbitro;
        this.fecha = fecha;
        this.recinto = recinto;
        this.pista = pista;
        this.set = set;
    }


    //Resultado
}

