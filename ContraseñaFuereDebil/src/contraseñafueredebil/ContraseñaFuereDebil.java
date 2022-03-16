
package contraseñafueredebil;

import java.util.Scanner;

public class ContraseñaFuereDebil {
    
    public static boolean verificar(String password){
        if(password.length()>8){
           boolean may= false;
           boolean num= false;
           char z;
           
           for(int i=0;i<password.length();i++){
               z=password.charAt(i);
               
               if(Character.isDigit(z))
                   num=true;
               if(Character.isUpperCase(z))
                   may= true;
           }
        if(num && may)
               return true;
        else 
               return false;
        }else {
            return false;
        }
           
    }
    
    public static void main(String[] args) {
       Scanner lector= new Scanner(System.in);
       String password;
       System.out.println("Ingrese una contraseña: ");
       password= lector.next();
       
       
       if(verificar(password))
           System.out.println("Contraseña fuerte");
       else 
           System.out.println("Contraseña debil");
       
       //System.out.println("Contraseña: "+ password);   
    }
    
}
