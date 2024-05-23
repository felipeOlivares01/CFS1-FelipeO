import * as readlineSync from 'readline-sync';

let cantDeDados:number = readlineSync.questionInt("ingrese la cantidad de dados que va a tirar: ");
let probabilidad:number = (1/6) ** cantDeDados;

console.log("------------------------------------------------------------------------------------------------");
console.log("la probabilidad aproximada de sacar 6 en todos los dados que tiraste es de", probabilidad,"%");
console.log("------------------------------------------------------------------------------------------------");


