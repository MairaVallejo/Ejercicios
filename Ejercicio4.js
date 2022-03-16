//Llamar funcion numeroAleatorio
let $numero= numeroAleatorio(0,1000);
console.log("Respuesta:"+ $numero);
//Llamar funcion compararNumeros y se le pasa el numero aletorio
let correcto=compararNumeros($numero);
console.log(correcto);

function numeroAleatorio(min, max){
    return Math.round(Math.random()* (max - min) + min );
}
//funcion que compara los numeros
function compararNumeros($numero){
    let bandera= false;
    do{
    let respuesta = Number(prompt("Adivine el numero:"));
       if(respuesta== $numero){
           bandera=true;
           return "¡Numero  correcto!";    
        }
        if(respuesta> $numero){
            console.log("El numero ingresado es Mayor");
            
        }
        if(respuesta< $numero){
            console.log("El numero ingresado es Menor");
            
        }
    }while(bandera== false);
      
}