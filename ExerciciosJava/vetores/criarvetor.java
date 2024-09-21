/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package vetor.e.matriz;

import java.util.Scanner;

/**
 *
 * @author gustavo_gaida
 */
public class criarvetor {

    public static void main(String[] args) {

        String cidades[] = new String[10];
        float altura[] = new float[10];
        float media = 00;
        
        Scanner leitor = new Scanner(System.in);

        System.out.println("Quero o nome de algumas cidades");

        for (int i = 0; i < 10; i++) {
            System.out.println("Qual o nome da cidade " + (i + 1));
            cidades[i] = leitor.next();
        }

        System.out.println("Agora quero a altura de algumas pessoas");

        for (int i = 0; i < 10; i++) {
            System.out.println("Qual a altura da pessoa " + (i + 1));
            media = (altura[i] = leitor.nextFloat())+media;
            
        }

        System.out.println("As cidades que você me falou foram");

        for (int i = 0; i < 10; i++) {
            System.out.println(cidades[i]);

        }

        System.out.println("E a altura das pessoas que você me falou foram");
        for (int i = 0; i < 10; i++) {
            System.out.println(altura[i]);
        }
        media = media/10;
        System.out.println("A altura média de todos os vetore é de "+media);

    }
}
