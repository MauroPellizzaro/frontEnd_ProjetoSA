/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package testejava1;

import java.util.Scanner;

/**
 *
 * @author gustavo_gaida
 */
public class Iffuncion_maioridade {
    public static void main(String[] args) {
        
        int idade;
        System.out.println("Por favor digite a sua idade");
        Scanner leitor = new Scanner(System.in);
        idade = leitor.nextInt();
        
        if (idade < 18) {
            System.out.println("Menor de 18");
        }else if(idade > 18){
            System.out.println("Maior de 18");
        }else{
            System.out.println("Tem 18");
        }
        
    }
}
