/*
Descripcion: Una calculadora simple con suma, resta, multiplicar y restar dos numeros.
Alumno: Gabriel Guzmán
Fecha: 20/10/2026
*/

// Solució fallo: El problema es que faltaba la inmterfas
interface SuperHero{
    name: string,
    age: number,
    address: {
        calle: string,
        pais: string,
        ciudad: string
    }
    showAddress: () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },

    showAddress(){
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const address = superHeroe.showAddress();
console.log( address );

export {};