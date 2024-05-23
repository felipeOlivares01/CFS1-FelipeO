import * as readlineSync from 'readline-sync';

/*
Escribe una función llamada saludo() que imprima en la consola el mensaje "¡Hola, bienvenido!" 
10 veces. Usar metodo while dentro de la funcion.
*/

 

function saludo():void {
    let cantSaludo: number = 0;
    while(cantSaludo < 10){
        console.log("¡Hola, bienvenido!");
        cantSaludo++;
    }
}
saludo();