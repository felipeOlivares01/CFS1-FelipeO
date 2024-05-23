import * as readlineSync from "readline-sync";

let numeroPositivo = 0;
let numeroNegativo = 0;
let numeroCero = 0;

let longitudDeArreglo:number = readlineSync.questionInt("Ingrese el tamaño de la lista de numeros: ");

let NumberosPyN:number[] = new Array(longitudDeArreglo);

for (let i = 0; i < longitudDeArreglo; i++) {
    NumberosPyN[i] = readlineSync.questionInt("Ingrese un numero: ");
    if (NumberosPyN[i] > 0) {
        numeroPositivo = numeroPositivo +1;
    }
    else if (NumberosPyN[i] == 0) {
        numeroCero = numeroCero +1;
    }
    else if (NumberosPyN[i] < 0) {
        numeroNegativo = numeroNegativo +1;
    }

}

console.log("la cantidad de numeros positivos son: " + numeroPositivo);
console.log("la cantidad de numeros Negativos son: " + numeroNegativo);
console.log("la cantidad de ceros son: " + numeroCero); 



