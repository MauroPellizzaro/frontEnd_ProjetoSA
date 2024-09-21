/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vetor.e.matriz;

/**
 *
 * @author gustavo_gaida
 */
public class abcd {

    public static void main(String[] args) {

        //A imprima o vetor na ordem decrescente
        //B imprima apenas os valores em indíces ímpares
        //C imprima os valores em índices múltiplos de 3
        //D imprima os valores da primeira metade do vetor
        //A
        int vetor[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        System.out.println("A--------------");
        for (int i = vetor.length - 1; i >= 0; i--) {
            System.out.println(vetor[i]);
        }

        System.out.println("B--------------");
        //B
        for (int i = 0; i <= vetor.length - 1; i++) {
            if (i % 2 != 0) {
                System.out.println(vetor[i]);
            }
        }

        System.out.println("C--------------");
        //C
        for (int i = 0; i <= vetor.length - 1; i++) {
            if (i % 3 == 0) {
                System.out.println(vetor[i]);
            }
        }

        System.out.println("D--------------");
        //D
        for (int i = 0; i <= vetor.length - 1; i++) {
            System.out.println(vetor[i]);
        }

    }
}
