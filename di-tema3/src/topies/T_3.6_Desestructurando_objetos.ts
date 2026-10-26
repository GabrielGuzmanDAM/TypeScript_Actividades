/*
Descripcion: Creamos una interfaces con ejemplos y los mostramos en pastalla, usando desestructuración
Alumno: Gabriel Guzmán
Fecha: 23/10/2026
*/

//---------------------------
// Interfaces
//---------------------------

// Creamos el objeto Matricula
interface Matriculas{
    modulosProfecionales: string[],
    cicloFormativo: string,
    centroEducativo: CentrosEducativos,
}

// Creamos el objeto Centro educativo
interface CentrosEducativos{
    centro: string,
    localidad: string,
    codigoCentro: number,
    telefono: number,
}

// Creamos el objeto Alumnos
interface Alumnos{
    nombre: string,
    apellido: string,
    anoNacimiento: number,
    nacionalidad: string,
    matricula: Matriculas,
}

//---------------------------
// Objetos
//---------------------------

// Dos objetos de tipo centroEducativo
const centro1: CentrosEducativos = {
    centro: "IES Costa del Sol",
    localidad: "Torremolinos",
    codigoCentro: 29000001,
    telefono: 952123456
};

const centro2: CentrosEducativos = {
    centro: "IES Los Manantiales",
    localidad: "Málaga",
    codigoCentro: 29000002,
    telefono: 952654321
};

// Dos objetos de tipo matricula
const matricula1: Matriculas = {
    modulosProfecionales: ["Programación", "Bases de Datos", "Sistemas Informáticos"],
    cicloFormativo: "Desarrollo de Aplicaciones Web",
    centroEducativo: centro1
};

const matricula2: Matriculas = {
    modulosProfecionales: ["Programación", "Lenguajes de Marcas", "Entornos de Desarrollo"],
    cicloFormativo: "Desarrollo de Aplicaciones Multiplataforma",
    centroEducativo: centro2
};

// Dos objetos de tipo Alumno
const alumno1: Alumnos = {
    nombre: 'Gabriel',
    apellido: 'Guzmán',
    anoNacimiento: 22,
    nacionalidad: 'Venezolano',
    matricula: matricula1
}

const alumno2: Alumnos = {
    nombre: 'Juan',
    apellido: 'Peres',
    anoNacimiento: 18,
    nacionalidad: 'Español',
    matricula: matricula2
}

//---------------------------
// Desestructuración
//---------------------------

// Por separado
const {nombre} = alumno1;
const {apellido} = alumno1;
const {cicloFormativo} = alumno1.matricula;
const {centro} = alumno1.matricula.centroEducativo;

// Junto
const {
    nombre: miNombre,
    apellido: miApellido,
    matricula
} = alumno1;

const {
    cicloFormativo: micicloFormativo,
    centroEducativo
} = matricula;

const {
    centro: miCentro,
} = centroEducativo;

//---------------------------
// Mostrar por consola
//---------------------------

console.log( "Alumnos: ");
console.table([alumno1 , alumno2]);


console.log( "Matricula: ");
console.table([matricula1 , matricula2]);

console.log( "Centros: ");
console.table([centro1 , centro2]);

console.log( "Mustrar datos de manera desestricturada: \n\n" + 
    "Alumno: " + nombre  + " " + apellido + 
    "\nCiclo Formativo: " + cicloFormativo + 
    "\nCentro: " + centro );

console.log( "--------------------------------------------------\n\n" + 
    "Alumno: " + miNombre  + " " + miApellido + 
    "\nCiclo Formativo: " + micicloFormativo + 
    "\nCentro: " + miCentro );