package testejava1;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Imc {
    
    public static void main(String[] args) {
       
    //Vamos calcular o IMC
    
        //Declarar as variáveis como float, já que não precisam de TODAS as casas decimais
        float peso, altura, imc;
    
        //Cria o leitor que será usado para captar os valores
        Scanner leitor = new Scanner(System.in);
    
        //Pede o peso
        System.out.println("Por favor, digite seu peso");
        
        //Lê o peso usando o leitor cirado acima
        peso = leitor.nextFloat();
        
        //Pede a altura
        System.out.println("Por favor, digite sua altura");
        
        //Lê a altura usando o leitor 
        altura = leitor.nextFloat();
        
        //Calcula o IMC e salva na variável
        imc = peso/(altura*altura);
        
        //Mostra o IMC na tela
        System.out.println("Seu IMC e de "+imc);
               
    
    
    }
    
}
