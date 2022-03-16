//Se le pide al usuario crear una contraseña
let contrasenia= prompt("Crea una contraseña");
//console.log(contrasenia);
const INTENTOS =3;
let acierto= false;
    //se verifica si la contrsenia hecha por el usuario cohincide con la que ingresa
    for(let i=0; i<INTENTOS && !acierto; i++){
        
        
        let _clave= prompt("Ingrese la contraseña");  

        if(_clave===contrasenia){
            console.log("Felicitaciones, recordás tu contraseña.");
            acierto= true;
        }
        
    } 
    if(acierto== false){
            console.log("Tenes que ejercitar la memoria.");
        }