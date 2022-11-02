import java.util.Scanner;

/**
 *
 * @author Ariel
 */
public class FuncionDibujSiete {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Declaramos un entero, cantidad de elementos.
        int n;
        //Utilizamos Scanner para capturar datos del teclado.
        Scanner num = new Scanner(System.in); 
        //El try sirve para capturar las excepciones de entrada de datos.
        try {
            System.out.print("Ingresa una cantidad entera: ");
            //Forma de capturar datos de teclado con Scanner.
            n = num.nextInt();
            //Llamamos la función pasando el entero capturado como argumento.
            asterisco(n);
        } catch (Exception e) {
            //En caso que el dato ingresado no sea de tipo entero, se indica el error.
            System.out.println("ERROR: se espera dato entero.");
        }
    }
    //Creamos la función al cual le pasamos un entero como argumento.
    static void asterisco(int n){
        //Creamos una variable tipo constante para utilizarla.
        final char simbolo = '+';
        //Creamos el primer for.
        //Se hace con un preincremento ++j.
        for (int i = 0; i < n; ++i) {
            //Cada primer for, se hace un salto de línea.
            System.out.println();
            //Utilizamos dos "for" para lograr la forma.
            for (int j = 0; j < n-i-1; ++j) {                     
                System.out.print(" ");           
            }
            for (int j = 0; j < 2*i+1; ++j){
                System.out.print(simbolo);
            }           
        }
        //Se utiliza otro grupo de for para lograr la forma de "rombo"
        for (int j = n-2; j >= 0; --j) {
            System.out.println();
            //Utilizamos dos "for" para lograr la forma.
            for (int i = 0; i < n-j-1; ++i) {
                System.out.print(" ");
            }
            for (int i = 0; i < 2*j+1; ++i) {
                System.out.print(simbolo);
            }
        }
        System.out.println();
    }
}