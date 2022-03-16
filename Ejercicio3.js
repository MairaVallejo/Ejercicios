//Ingreso de datos
let valor_hora= parseInt(prompt("Ingrese el valor hora"));
let nombre= prompt("Ingrese su nombre");
let antiguedad= parseInt(prompt("Ingrese su antiguedad"));
let cant_horas= parseInt(prompt("Ingrese las horas trabajadas"));
let salario=0;
let $valor=0;

//Calculo de pago
salario= valor_hora * cant_horas;
//Calculo de pago para empleados con mas de 10 años de antiguedad
if(antiguedad>10){
    $valor= antiguedad * 30;
    salario= salario + $valor;
}
//se imprimen datos
console.log("Nombre:", nombre, "Antiguedad: ", antiguedad, "Total a cobrar: ", salario);