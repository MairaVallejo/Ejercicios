//Se pide el numero 
num= Number(prompt("Ingrese un numero"));

let $menor=num;
let $mayor=num;
let $sumaTotal=0;
//Ciclo del que se sale ingresando -1
while(num!=-1){
    //Carcular el numero menor
    if($menor>num && num!=-1){
        $menor= num;
    }
    //Calcular el mayor
    if($mayor<num){
        $mayor=num;
    }
    //suma el total de los numeros
    $sumaTotal = $sumaTotal+ num;
    
    num= Number(prompt("Ingrese un numero"));
}
//Se suma el valor total de los numeros introducidos, menor y mayor
let sumaNumeros= $sumaTotal + $menor + $mayor; 
console.log("Fin del programa");
//Se imprimen los resultados
console.log("Mayor número introducido: ", $mayor);
console.log("Menor número introducido: ", $menor);
console.log("Suma de todos los números introducidos: ", $sumaTotal);
console.log("Suma de todos los números: ", sumaNumeros);