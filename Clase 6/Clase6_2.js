"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var num = 1; num < 100; num++) {
    var mod2Num = num % 2 == 0;
    var mod3Num = num % 3 == 0;
    if (mod2Num && mod3Num) {
        console.log("el numero", num, "es multiplo de 2 y 3");
    }
    else if (mod2Num) {
        console.log("el numero", num, "es multiplo de 2");
    }
    else if (mod3Num) {
        console.log("el numero", num, "es multiplo de 3");
    }
}
