

package testejava1;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class HelloWorld {
    public static void main(String[] args) {
        
        //Printa na tela a mensagem Hello World, e depois cria uma nova linha
       System.out.println("Hello World");
       System.out.println("Olá mundo");
       
       //Mostra uma caixa de texto com a mensagem hello World
       JOptionPane.showMessageDialog(null, "Hello World");
       
       //Cria uma váriavel cadeia/string para guardar o nome
       String name1;
       String name2;
       
       //Cria um objeto do tipo Scanner com o nome do leitor
       Scanner leitor = new Scanner(System.in);
       
       //Escreve pedindo o nome
        System.out.println("Por favor digite o seu nome");
       
       //Variável name1 recebe o que foi criado acima, o que vai ser digitado!
       name1 = leitor.next();
       
       //Variável name 2 recebe o que foi digital no joptionpane 
       name2 = JOptionPane.showInputDialog("Informe o seu nome");
              
       //Escreve qual foi seu primeiro nome digitado
        System.out.println("O seu primeiro nome foi "+name1);
        
        
       //Escreve qual foi seu segundo nome digitado
        System.out.println("O seu segundo nome foi "+name2);
    }
}
