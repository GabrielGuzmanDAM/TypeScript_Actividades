import type { Partido } from './CalendarioPartidos';
import { Arbitro } from './Arbitro';
import { Equipo } from './Equipo';
import { Jugador } from './Jugador';

//-----------------------------------------
// Creamos 6 jugadores, 3 equipos, 2 árbitros y un calendario con tres partidos.

// Creamos los jugadores
const jugador1 = new Jugador("Juan", "Pérez", "Hombre", 123456789, "Calle A, 1", "1");

const jugador2 = new Jugador("María", "Gómez", "Mujer", 987654321, "Calle B, 2", "2");

const jugador3 = new Jugador("Carlos", "López","Hombre", 111111111, "Calle C, 3", "3");

const jugador4 = new Jugador("Ana", "Martínez","Mujer",  111111111, "Calle D, 4", "4");

const jugador5 = new Jugador("Luis", "Sánchez", "Hombre", 222222222, "Calle E, 5", "5");

const jugador6 = new Jugador("Laura", "Ramírez", "Mujer", 333333333, "Calle F, 6", "6");

// Creamos los equipos
const equipo1 = new Equipo("Equipo A", [jugador1, jugador2]);
const equipo2 = new Equipo("Equipo B", [jugador3, jugador4]);
const equipo3 = new Equipo("Equipo C", [jugador5, jugador6]);

// Creamos los árbitros
const arbitro1 = new Arbitro("Pedro", "García", "Hombre", 444444444, "Calle G, 7", 12345);
const arbitro2 = new Arbitro("Sofía", "Hernández", "Mujer", 555555555, "Calle H, 8", 67890);

// Creamos el calendario de partidos
const calendario: Partido[] = [
    {
        equipo1: equipo1,
        equipo2: equipo2,
        arbitro: arbitro1,
        fecha: new Date("2024-06-15T18:14:00"),
        recinto: "Estadio Municipal",
        pista: 1
    },
    {
        equipo1: equipo2,
        equipo2: equipo3,
        arbitro: arbitro2,
        fecha: new Date("2024-06-16T20:20:00"),
        recinto: "Polideportivo Central",
        pista: 2
    },
    {
        equipo1: equipo1,
        equipo2: equipo3,
        arbitro: arbitro1,
        fecha: new Date("2024-06-17T19:03:00"),
        recinto: "Estadio Municipal",
        pista: 1
    }
]; 

//-----------------------------------------
// mostramosp or consola toda la informacion.

//jugadores
console.log("JUGADORES");
console.log("-----------------------");
console.log(jugador1);
console.log(jugador2);
console.log(jugador3);
console.log(jugador4);
console.log(jugador5);
console.log(jugador6);

// equipos
console.log("EQUIPOS");
console.log("-----------------------");
console.log(equipo1);
console.log(equipo2);
console.log(equipo3);

// árbitros
console.log("ÁRBITROS");
console.log("-----------------------");
console.log(arbitro1);
console.log(arbitro2);

// calendario de partidos
console.log("CALENDARIO DE PARTIDOS");
console.log("-----------------------");
console.log(calendario);