import * as readlineSync from 'readline-sync';
/*
Crea una función llamada tabla_multiplicar() que imprima en la consola la 
tabla de multiplicar del número 5 (desde 1 hasta 10). Pista → usar un FOR para multiplicar.
*/

function tablaMultiplicar():void {
    for (let num:number = 1; num <= 10; num++) {
        console.log(num * 5);
    }
}

tablaMultiplicar();