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
public class ex1corrigir {

    public static void main(String[] args) {

        int numeros[] = new int[10];
        int pares[] = new int[10];
        int numero = 0;
        int aux = 0;

        Scanner leitor = new Scanner(System.in);

        for (int i = 0; i < 10; i++) {

            System.out.println("Qual o número " + (i + 1));
            numeros[i] = numero = leitor.nextInt();
            if (numero % 2 == 0) {
                aux++;
                pares[aux] = numero;
            }
        }

        System.out.println("Pares: ---------");
        for (int i = 0; i < pares.length - 1; i++) {
            if (pares[i] != 0) {
                System.out.println(pares[i]);
            }
        }

        System.out.println("Números: --------");
        for (int i = 0; i < numeros.length - 1; i++) {
            System.out.println(numeros[i]);
        }

    }
}
