let  _num1= Number( prompt("Ingrese un numero"));

if(_num1 <=1){
    console.log("No es un numero primo");
}
else{
    //Calculo la raiz del numero ingresado
    let raiz= Math.sqrt(_num1);
    raiz= Math.round(raiz);
    //console.log(raiz);
    let cont=0;
    
    //Verifico los si raiz tiene  divisores y cuantos
    for(let i= raiz; i>1; i--){
        if(_num1%i==0){
            cont++;
        }  
    }
    //console.log(cont);
    //Se determina si es primo o no segun si tiene divisores
    if(cont<1){
        console.log("Es primo");
    }
    else{
        console.log("No es un numero primo")
    }
}