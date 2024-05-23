import * as readlineSync from 'readline-sync';

for (let num = 1; num < 100; num++){
    let mod2Num = num % 2 == 0
    let mod3Num = num % 3 == 0
    
    if (mod2Num && mod3Num){
        console.log("el numero", num,"es multiplo de 2 y 3")
    }
    else if(mod2Num){
        console.log("el numero", num ,"es multiplo de 2")
    }
    
    else if (mod3Num){
        console.log("el numero", num,"es multiplo de 3")
    }

}