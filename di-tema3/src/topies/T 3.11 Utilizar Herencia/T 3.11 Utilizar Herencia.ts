import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";


//-----------------------------------------------------

const profesor1 = new Profesor(
    "Playamar",
    "Ingeniería",
    "Departamento de Ingeniería",
    "Gabriel",
    "Guzmán",
    22,
    "Torremolinos",
    "Hombre"
);

const profesor2 = new Profesor(
    "Playamar",
    "Matemáticas",
    "Departamento de Matemáticas",
    "Alvaro",
    "García",
    30,
    "Torremolinos",
    "Hombre"
);

const estudiante1 = new Alumno(
    "Playamar",
    "Matemáticas",
    ["Álgebra", "Geometría"],
    "María",
    "García",
    18,
    "Torremolinos",
    "Mujer"
);

const estudiante2 = new Alumno(
    "Playamar",
    "Ingeniería",
    ["Redes", "Programación"],
    "Hugo",
    "Alvarez",
    18,
    "Torremolinos",
    "Hombre"
);

//------------------------------------------------------
console.log("------------------------");
console.log(profesor1);
console.log(profesor2);
console.log("------------------------");
console.log(estudiante1);
console.log(estudiante2);
console.log("------------------------");