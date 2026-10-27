import type { Alumno , Instituto, Direcion, Ensenanza } from "./t9modulo-instituto";
import  * as metodos from "./t9modulo-instituto";


//---------------------------
// Objetos
//---------------------------

const direccion1: Direcion = {
    calle: "Calle Mayor, 12",
    cp: "29001",
    localidad: "Málaga",
    provincia: "Málaga"
};

const direccion2: Direcion = {
    calle: "Avenida Andalucía, 45",
    cp: "29620",
    localidad: "Torremolinos",
    provincia: "Málaga"
};

const direccion3: Direcion = {
    calle: "Calle Real, 8",
    cp: "18001",
    localidad: "Granada",
    provincia: "Granada"
};

const ensenanza1: Ensenanza = {
    nivel: "ESO",
    obligatoriedad: true,
    familiaProfecional: "",
    modalidad: "Mañana"
};

const ensenanza2: Ensenanza = {
    nivel: "Grado Superior",
    obligatoriedad: false,
    familiaProfecional: "FP",
    modalidad: "Tarde"
};

const ensenanza3: Ensenanza = {
    nivel: "Grado Medio",
    obligatoriedad: false,
    familiaProfecional: "FP",
    modalidad: "Telemático"
};

const alumno1: Alumno = {
    nombre: "Carlos García",
    edad: 16,
    sexo: "Hombre",
    ensenanza: ensenanza1,
    direccion: direccion1
};

const alumno2: Alumno = {
    nombre: "Lucía Martínez",
    edad: 20,
    sexo: "Mujer",
    ensenanza: ensenanza2,
    direccion: direccion2
};

const alumno3: Alumno = {
    nombre: "Pablo López",
    edad: 18,
    sexo: "Hombre",
    ensenanza: ensenanza3,
    direccion: direccion3
};

const instituto1: Instituto = {
    nombre: "IES Costa del Sol",
    director: "Antonio Ruiz",
    telefono: 952123456,
    correo: "info@costadelsol.es",
    direcion: "Calle Mayor, 12, Málaga",
    listaAlumnos: [alumno1, alumno2]
};

const instituto2: Instituto = {
    nombre: "IES Sierra Nevada",
    director: "María Fernández",
    telefono: 958123456,
    correo: "info@sierranevada.es",
    direcion: "Calle Real, 8, Granada",
    listaAlumnos: [alumno3]
};

const instituto3: Instituto = {
    nombre: "IES Andalucía",
    director: "José Martín",
    telefono: 951654321,
    correo: "info@iesandalucia.es",
    direcion: "Avenida Andalucía, 45, Torremolinos",
    listaAlumnos: [alumno1, alumno2, alumno3]
};

//---------------------------
// Mostrar por consola
//---------------------------

console.log("-----------------------");
console.log("MATRICULAR ALUMNO");
console.log("-----------------------");

    const nombre = prompt("Nombre:")!;
    const edad = Number(prompt("Edad:"));
    const sexo = prompt("Sexo (Hombre/Mujer):") as "Hombre" | "Mujer";

const alumno4 = metodos.crearAlumno(nombre, edad, sexo, ensenanza1, direccion1);

console.log("-----------------------");
console.log("MOSTRAR ALUMNOS");
console.log("-----------------------");

console.log(metodos.mostrarAlumno(alumno4));

console.log("-----------------------");
console.log("MOSTRAR DIRECION DEL INTITUTO");
console.log("-----------------------");

console.log(metodos.setDirecionIntituto(instituto1));