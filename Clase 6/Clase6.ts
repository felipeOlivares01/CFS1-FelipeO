import * as readlineSync from 'readline-sync';

let notas:number = 0;
let suma:number = 0;
let promedio:number = 0;

for (let contador = 0; contador <10; contador++) {
    notas = readlineSync.questionInt("ingrese una nota: ");
    suma += notas
}
promedio = suma / 10;

console.log("el Promedio de la nota es: ", promedio);