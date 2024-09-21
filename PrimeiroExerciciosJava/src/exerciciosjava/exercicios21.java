/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exerciciosjava;

import java.util.Scanner;

/**
 *
 * @author gustavo_gaida
 */
public class exercicios21 {

    public static void main(String[] args) {
        int quantiaanimais = 0;
        int gatos = 0;
        int cachorros = 0;
        int opc = 0;

        Scanner leitor = new Scanner(System.in);

        System.out.println("Por favor, digite a quantia de animais que serão registrados");
        quantiaanimais = leitor.nextInt();

        System.out.println("Digite 1 para gato, e 2 para cachorros");
        for (int i = 0; i < quantiaanimais; i++) {
            System.out.println("Digite para registrar o animal "+i);
            opc = leitor.nextInt();
            switch (opc) {
                case 1:
                    gatos++;
                    break;
                case 2:
                    cachorros++;
                    break;
                default:
                    System.out.println("\nNúmero inválido\n");
                    i--;
            }
        }
        System.out.println("O total de gatos foi de "+gatos);
        System.out.println("O total de cachorros foi de "+cachorros);

    }

}
