"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantDeDados = readlineSync.questionInt("ingrese la cantidad de dados que va a tirar: ");
var probabilidad = Math.pow((1 / 6), cantDeDados);
console.log("------------------------------------------------------------------------------------------------");
console.log("la probabilidad aproximada de sacar 6 en todos los dados que tiraste es de", probabilidad, "%");
console.log("------------------------------------------------------------------------------------------------");
