"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Escribe una función llamada saludo() que imprima en la consola el mensaje "¡Hola, bienvenido!"
10 veces. Usar metodo while dentro de la funcion.
*/
function saludo() {
    var cantSaludo = 0;
    while (cantSaludo < 10) {
        console.log("¡Hola, bienvenido!");
        cantSaludo++;
    }
}
saludo();
