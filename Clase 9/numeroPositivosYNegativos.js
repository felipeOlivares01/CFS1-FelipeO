"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroPositivo = 0;
var numeroNegativo = 0;
var numeroCero = 0;
var longitudDeArreglo = readlineSync.questionInt("Ingrese el tamaño de la lista de numeros: ");
var NumberosPyN = new Array(longitudDeArreglo);
for (var i = 0; i < longitudDeArreglo; i++) {
    NumberosPyN[i] = readlineSync.questionInt("Ingrese un numero: ");
    if (NumberosPyN[i] > 0) {
        numeroPositivo = numeroPositivo + 1;
    }
    else if (NumberosPyN[i] == 0) {
        numeroCero = numeroCero + 1;
    }
    else if (NumberosPyN[i] < 0) {
        numeroNegativo = numeroNegativo + 1;
    }
}
console.log("la cantidad de numeros positivos son: " + numeroPositivo);
console.log("la cantidad de numeros Negativos son: " + numeroNegativo);
console.log("la cantidad de ceros son: " + numeroCero);
