/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exerciciosvetores;

import java.util.Scanner;

/**
 *
 * @author gustavo_gaida
 */
public class ex2 {
    public static void main(String[] args) {
        
        String nomes[] = new String [10] ;
        String pesquisa = "";
        int repetidos = 0;
        
        Scanner leitor = new Scanner(System.in);
        
        for (int i = 0; i < 10; i++) {
            System.out.println("Digite o nome "+(i+1));
            nomes[i] = leitor.next();
        }
        
        
        System.out.println("Agora digite um nome para pesquisar");
        pesquisa = leitor.next();
        
        for (int i = 0; i < 10; i++) {
            
            if (pesquisa.equals(nomes[i])) {
                repetidos++;
            }
            
        }
        if (repetidos>0) {
            System.out.println("O nome foi escrito "+repetidos+" vezes");
        }else{
            System.out.println("Esse nome não foi escrito anteriormente");
        }
        
    }
}
