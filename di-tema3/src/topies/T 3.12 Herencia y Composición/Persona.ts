export class Persona {

    private nombre!: string;
    private apellido!: string;
    private genero!: "Hombre" | "Mujer";
    private telefono!: number;
    private direccion!: string;

    //-----------------------------------------

    constructor(nombre: string, 
        apellido: string, 
        genero: "Hombre" | "Mujer", 
        telefono: number,
        direccion: string,
        ) 
        {
            this.setNombre = nombre;
            this.setApellido = apellido;
            this.setGenero = genero;
            this.setTelefono = telefono;
            this.setDireccion = direccion;
        }

    //------------------------------------------

    get getNombre(): string {
        return this.nombre;
    }

    get getApellido(): string {
        return this.apellido;
    }

    get getGenero(): "Hombre" | "Mujer"{
        return this.genero;
    }

    get getTelefono(): number {
        return this.telefono;
    }

    get getDireccion(): string {
        return this.direccion;
    }

    //------------------------------------------

    set setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    set setApellido(nuevoApellido: string) {
        this.apellido = nuevoApellido;
    }

    set setGenero(nuevoGenero:  "Hombre" | "Mujer" ) {
        this.genero = nuevoGenero;
    }

    set setTelefono(nuevoTelefono: number) {
        this.telefono = nuevoTelefono;
    }

    set setDireccion(nuevaDireccion: string) {
        this.direccion = nuevaDireccion;
    }

}