import type { Expediente } from "./Expediente";
import { Estudiante } from "./Estudiante";
import { Instituto } from "./Instituto";

//-----------------------------------------------------

const expediente1: Expediente = {
    curso: "DAW",
    notaMedia: 8.5
};

const expediente2: Expediente = {
    curso: "DAM",
    notaMedia: 9.2
};

const estudiante1 = new Estudiante(
    "Gabriel",
    "Guzmán",
    22,
    "Torremolinos",
    expediente2,
    "Hombre"
);

const estudiante2 = new Estudiante(
    "Samuel",
    "Enrique",
    23,
    "Malaga",
    expediente1
);

const centro1 = new Instituto(
    "IES Los Manantiales",
    "Torremolinos",
    [estudiante1, estudiante2]
);

//------------------------------------------------------
console.log("------------------------");
console.log(estudiante1);
console.log(estudiante2);
console.log("------------------------");
console.log(centro1);