/*
Descripcion: Una calculadora simple con suma, resta, multiplicar y restar dos numeros.
Alumno: Gabriel Guzmán
Fecha: 20/10/2026
*/

// Funciones

//pedirPrimerNumeros: Funcion que pide al usuario el primer numero de el calculo.
const pedirPrimerNumeros = () => {

    const PrimerNumero = prompt(
    'PRIMER NUMERO\n'+
    "----------------------------------\n" + 
    'Dame un número:');

    const numero1 = Number(PrimerNumero);

    return numero1;

};

//pedirSegundoNumeros: Funcion que pide al usuario de manera opcional el segundo numero de el calculo.
const pedirSegundoNumeros = (numero1: number) => {

    const SegundoNumero = prompt(
    'SEGUNDO NUMERO (opcional)\n'+
    "----------------------------------\n" + 
    'Dame un número:');

    let numero2;

    if (SegundoNumero === ''){

        numero2 = Number(numero1);

    } else {

        numero2 = Number(SegundoNumero);

    }

    return numero2;
};

// suma: suma dos numeros.
const suma = (numero1: number , numero2: number) => {

    let suma: number = numero1 + numero2;

    return suma;
};

// resta: resta dos numeros.
const resta = (numero1: number , numero2: number) => {

    let resta = numero1 - numero2;

    return resta;
};

//multiplicar: Multiplica dos numeros.
const multiplicar = (numero1: number , numero2: number) => {

    let multiplicar = numero1 * numero2;

    return multiplicar;
};

//dividir: dividir dos numeros
const dividir = (numero1: number , numero2: number) => {

    let dividir = numero1 / numero2;

    return dividir;
};

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//Variables

let fin: boolean = false;

let corecto: boolean = false;

let numero1;

let numero2;

let numero = Number(0);

// bucle de la calculadora
do{
    //bucle para verificar las opciones
    do {
        //interfas
        const entrada = prompt(
        "---------------------------------\n" + 
        "CALCULADORA SIMPLE\n" + 
        "---------------------------------\n"  + 
        "1) Suma\n"  + 
        "2) Resta\n"  + 
        "3) Multiplicar\n"  + 
        "4) Dividir\n"  + 
        "----------------------------------\n" +
        "0) SALIR\n"  + 
        "----------------------------------\n" +
        "----------------------------------\n" + 
        'Dame un número:');
        //pedir numero

        numero = Number(entrada);

        if (numero > -1 && numero < 5 && Number.isInteger(numero)) {

            corecto = true;
            
        } else {

            alert('------------------- \n' +
                'Numero invalido'
            );
            
        }
        
    } while (!corecto);

    // un Switch para cada una de las opciones
    switch(numero){
        case 1:

            let numeroSuma: number;

            numero1 = pedirPrimerNumeros();

            numero2 = pedirSegundoNumeros(numero1);

            numeroSuma = suma(numero1 , numero2);

            alert(
                '------------------- \n' +
                numero1 + ' + ' + numero2 + " = " + numeroSuma);

            break;

        case 2:

            let numeroResta: number = 0;

            numero1 = pedirPrimerNumeros();

            numero2 = pedirSegundoNumeros(numero1);

            numeroResta = resta(numero1 , numero2);

                        alert(
                '------------------- \n' +
                numero1 + ' - ' + numero2 + " = " + numeroResta);

            break;

        case 3:

            let numeroMultiplicar;

            numero1 = pedirPrimerNumeros();

            numero2 = pedirSegundoNumeros(numero1);

            numeroMultiplicar = multiplicar(numero1 , numero2);
            
            alert(
                '------------------- \n' +
                numero1 + ' * ' + numero2 + " = " + numeroMultiplicar);
            break;

        case 4:

            let numeroDividir;

            numero1 = pedirPrimerNumeros();

            numero2 = pedirSegundoNumeros(numero1);

            numeroDividir = dividir(numero1 , numero2);
            
            alert(
                '------------------- \n' +
                numero1 + ' / ' + numero2 + " = " + numeroDividir);
            break;
        
        default:

            fin = true;

            alert(
                '------------------- \n' +
                'FIN \n' +
                '-------------------');

            break;
    }

}while(!fin);





