//-------------------------------------
//Interfaces
//-------------------------------------

interface Expediente{
    curso: string;
    notaMedia: number
}

interface AlumnoFP{
    nombre: string;
    apellido: string;
    ModulosProfesionales: string[];
    espedientes: Expediente[]

}

//-------------------------------------
//Ejemplos
//-------------------------------------

const expediente1: Expediente = {
    curso: "1º DAW",
    notaMedia: 7.5
};

const expediente2: Expediente = {
    curso: "2º DAW",
    notaMedia: 8.7
};

const alumno1: AlumnoFP = {
    nombre: "Carlos",
    apellido: "García",
    ModulosProfesionales: [
        "Programación",
        "Bases de Datos",
        "Sistemas Informáticos"
    ],
    espedientes: [
        expediente1,
        expediente2
    ]
};

const alumno2: AlumnoFP = {
    nombre: "Lucía",
    apellido: "Martínez",
    ModulosProfesionales: [
        "Entornos de Desarrollo",
        "Desarrollo Web",
        "Programación"
    ],
    espedientes: [
        expediente1,
        expediente2
    ]

};

const alumno3: AlumnoFP = {
    nombre: "Pablo",
    apellido: "López",
    ModulosProfesionales: [
        "Programación",
        "Bases de Datos",
        "Lenguajes de Marcas"
    ],
    espedientes: [
        expediente1,
        expediente2
    ]
};

//-------------------------------------
//Desestructuracion
//-------------------------------------

const {
    nombre: miNombre,
    apellido: miApellido,
    ModulosProfesionales: [mp1,mp2,mp3],
    espedientes: [e1,e2]
} = alumno1;

const{
 notaMedia: miMedia

} = e2

//-------------------------------------
//Bisualisacion
//-------------------------------------

console.log( "--------------------------------------------------\n" + 
    "Alumno: " + miNombre  + " " + miApellido + 
    "\nPrimer Módulo Profesional de su matrícula: " + mp1 + 
    "\nCurso y Nota Media de la segunda entrada en su expediente: " + miMedia );