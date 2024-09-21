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
public class Ifcomand {
    public static void main(String[] args) {
        
        
        /*
        Operadores lógicos
        ! não
        && e
        || ou
        */
        
        System.out.println("Escreva um valor");
        Scanner ltr = new Scanner(System.in);
        int vl;
         for (int i = 0; i < 3; i++) {
        vl = ltr.nextInt();
        
        if (vl > 10) {
            System.out.println("O valor e maior que 10");
        }else  if (vl < 10){
            System.out.println("O valor e menor que 10");
        }else{
            System.out.println("O valor e 10");
        }
        }
    }
    
}
