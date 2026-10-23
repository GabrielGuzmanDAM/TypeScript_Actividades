let habilidad = ['Velicidad','Magia','Curación'];

let habilidad2 = ['Velicidad','Magia','Curación', true, 123];


const personaje = {
  nombre : 'Goku',
  pv : 100,
  habilidades : ['Fuerza', 'Velocidad']
};

// Para ello utilizamos interfaces
interface Personaje {
    nombre: string;
    pv: number;
    habilidades: string[];
    procedencia?: string; // opcional
}

const saiyan: Personaje = {
    nombre: "Goku",
    pv: 100,
    habilidades: ["Superguerrero", "Bonsadoso"],
    procedencia: "La Tierra"
}

saiyan.procedencia = "Namek";
console.table(saiyan);