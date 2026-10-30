//---------------------------
// Interfaces
//---------------------------

export interface Alumno {
	nombre: string;
	edad: number;
    sexo: "Hombre" | "Mujer";
    ensenanza: Ensenanza;
    direccion: Direcion

}

export interface Instituto {
	nombre: string;
	director: string;
    telefono: number;
    correo: string;
    direcion: string;
    listaAlumnos: Alumno[]
}

export interface Ensenanza {
	nivel: string;
	obligatoriedad: boolean;
    familiaProfecional: "FP" | "";
    modalidad: "Mañana"|"Tarde"|"Telemático"
}

export interface Direcion {
	calle: string;
	cp: string;
    localidad: string;
    provincia: string
}

//---------------------------
// Metodos
//---------------------------

//crearAlumno: Crea un alumno de la interfas Alumno
export const crearAlumno = (
    nombre: string,
    edad: number,
    sexo: "Hombre" | "Mujer",
    ensenanza: Ensenanza,
    direccion: Direcion
): Alumno => {
    return { nombre, edad, sexo, ensenanza, direccion };
};

// Pide el alumno para crear el usuario
export const pedirAlumno = (): Alumno => {
    const nombre = prompt("Nombre:")!;
    const edad = Number(prompt("Edad:"));
    const sexo = prompt("Sexo (Hombre/Mujer):") as "Hombre" | "Mujer";

    const ensenanza: Ensenanza = {
        nivel: prompt("Nivel educativo:")!,
        obligatoriedad: confirm("¿Es obligatorio?"),
        familiaProfecional: confirm("¿Es FP?") ? "FP" : "",
        modalidad: prompt("Modalidad (Mañana/Tarde/Telemático):") as Ensenanza["modalidad"]
    };

    const direccion: Direcion = {
        calle: prompt("Calle:")!,
        cp: prompt("Código postal:")!,
        localidad: prompt("Localidad:")!,
        provincia: prompt("Provincia:")!
    };

    return crearAlumno(nombre, edad, sexo, ensenanza, direccion);
};

//mostrarAlumno: Muestra un alumno de la interfas Alumno
export const mostrarAlumno = (alumno: Alumno): void => {

    const {
        nombre: pedirNombre,
        edad: pedirEdad,
        sexo: pedirSexo,
        ensenanza,
        direccion

    } = alumno;

    const{

        nivel: pedirNivel,
	    obligatoriedad: pedirObligatoriedad,
        familiaProfecional: pedirFamiliaProfecional,
        modalidad: pedirModalidad 

    } =ensenanza;

    const{

        calle: pedirCalle,
        cp: pedirCp,
        localidad: pedirLocalidad,
        provincia: pedirProvincia

    } = direccion;

    console.log("-------------");
    console.log("Nombre:", pedirNombre);
    console.log("Edad:", pedirEdad);
    console.log("Sexo:", pedirSexo);

    console.log("-------------");
    console.log("Nivel:", pedirNivel);
    console.log("Obligatoriedad:", pedirObligatoriedad);
    console.log("Familia profesional:", pedirFamiliaProfecional);
    console.log("Modalidad:", pedirModalidad);

    console.log("-------------");
    console.log("Calle:", pedirCalle);
    console.log("Código postal:", pedirCp);
    console.log("Localidad:", pedirLocalidad);
    console.log("Provincia:", pedirProvincia);

};

//setDirecionIntituto: Muestra la direcion de la interfas Intituto
export const setDirecionIntituto = (intituto: Instituto): void => {

    const {direcion} = intituto;

    console.log("Direcion de intituto: " + direcion);

};

