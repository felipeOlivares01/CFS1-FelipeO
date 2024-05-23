"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var notas = 0;
var suma = 0;
var promedio = 0;
for (var contador = 0; contador < 10; contador++) {
    notas = readlineSync.questionInt("ingrese una nota: ");
    suma += notas;
}
promedio = suma / 10;
console.log("la nota promedio es: ", promedio);
