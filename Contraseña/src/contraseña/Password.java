
package contraseña;

public final class Password {
    //Constante
    private final static int LONG_DEF=8;
  
    //Atributos
    private int longitud;
    private String contraseña;
  
    //Metodos publicos
    public int getLongitud() {
        return longitud;
    }
  
    public void setLongitud(int longitud) {
        this.longitud = longitud;
    }
  
    //Devuelve la contraseña
    public String getContraseña() {
        return contraseña;
    }
  
    //Genera una contraseña al azar con la longitud dada
     
    public String generaPassword (){
        String password="";
        for (int i=0;i<longitud;i++){
            //Se genera un numero aleatorio
            int _numAleatorio=((int)Math.floor(Math.random()*3+1));
            // El numero aleatorio determina cuantas minusculas, mayusculas y numeros tendra la contraseña
            if (_numAleatorio==1){
                char min=(char)((int)Math.floor(Math.random()*(123-97)+97));
                password+=min;
            }else{
                if(_numAleatorio==2){
                    char may=(char)((int)Math.floor(Math.random()*(91-65)+65));
                    password+=may;
                }else{
                    char num=(char)((int)Math.floor(Math.random()*(58-48)+48));
                    password+=num;
                }
            }
        }
        System.out.println(password);
        //Se retorna la contraseña
        return password;
    }
  
    //Se verifica si la contraseña es fuerte o no
    public boolean esFuerte(){
        int cont_num=0;
        int cont_min=0;
        int cont_may=0;
        //Se comprueba por caracter el tipo de caracter
        for (int i=0;i<contraseña.length();i++){
                if (contraseña.charAt(i)>=97 && contraseña.charAt(i)<=122){
                    cont_min+=1;
                }else{
                    if (contraseña.charAt(i)>=65 && contraseña.charAt(i)<=90){
                        cont_may+=1;
                }else{
                    cont_num+=1;
                    }
                }
            }
        //Se comprueba los requisitos (más de 2 mayúsculas, más de 1 minúscula y más de 3 números)
        if(cont_num>=3 && cont_min>=1 && cont_may>=2){
            return true;
        }else{
            return false;
        }
    }
  
    //Constructores
    //crea una contraseña al azar
    public Password (){
        this(LONG_DEF);
    }
  
    //Se pasa por parametro la contraseña
    public Password (int longitud){
        this.longitud=longitud;
        contraseña=generaPassword();
    }
         
}
