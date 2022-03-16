package contraseña;



import javax.swing.JOptionPane;



public class Main {

    
    public static void main(String[] args) {
  
       String texto;
        texto = JOptionPane.showInputDialog("Introduce la longitud del password");
        int longitud=Integer.parseInt(texto);
  
            boolean fortalezaPassword;
            Password miArreglo =new Password(longitud);
            fortalezaPassword=miArreglo.esFuerte();
            System.out.println(miArreglo.getContraseña()+" "+fortalezaPassword);
        }
    }
