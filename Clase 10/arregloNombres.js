"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/*
let nombreUsuario:string = readlineSync.question("Ingrese el nombre: ");

let nombresPrecargados:string[] = ["Juan", "Lucia", "Julieta", "Maximo", "Pedro"];

function buscarNombres():void{
    for(let i = 0; i < nombresPrecargados.length; i++){
        let econtrado = false;
        if(nombresPrecargados[i] == nombreUsuario){
            console.log("El nombre " + nombreUsuario + " se encuentra en el arreglo");
            econtrado = true;
        }
    }
}
*/
var nombresPrecargados = ["Juan", "María", "Pedro", "Ana", "Luis"];
function buscarNombre(nombre) {
    var encontrado = false;
    for (var _i = 0, nombresPrecargados_1 = nombresPrecargados; _i < nombresPrecargados_1.length; _i++) {
        var nombrePrecargado = nombresPrecargados_1[_i];
        if (nombrePrecargado === nombre) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        console.log("El nombre \"".concat(nombre, "\" ha sido encontrado en el arreglo."));
    }
    else {
        console.log("No se encontr\u00F3 el nombre \"".concat(nombre, "\" en el arreglo."));
    }
}
var nombreUsuario = readlineSync.question("Ingrese un nombre a buscar: ");
if (nombreUsuario) {
    buscarNombre(nombreUsuario);
}
else {
    console.log("No se ha ingresado ningún nombre.");
}
