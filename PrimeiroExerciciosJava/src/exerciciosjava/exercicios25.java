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
public class exercicios25 {

    public static void main(String[] args) {

        int nVoto = 0;
        int candidato1 = 0;
        int candidato2 = 0;
        int nulo = 0;
        int branco = 0;
        int[] neleitor = new int[999];
        int i = 0;

        Scanner leitor = new Scanner(System.in);

        do {
            System.out.println("Digite o seu número de eleitor");
            neleitor[i] = leitor.nextInt();
            if (neleitor[i] < 0) {
                break;
            }

            System.out.println("Urna eletrônica");
            System.out.println("Candidato 1: 225");
            System.out.println("Candidato 2: 133");
            System.out.println("Nulo: 0");
            System.out.println("Branco: 1");

            System.out.println("Agora, digite o seu voto");
            nVoto = leitor.nextInt();
            if (nVoto == 225) {
                candidato1++;
            }
            if (nVoto == 133) {
                candidato2++;
            }
            if (nVoto == 0) {
                nulo++;
            }
            if (nVoto == 1) {
                branco++;
            }

            i++;
        } while (nVoto > -1);

        System.out.println("Votação encerrrada");

        if (candidato1 > candidato2) {
            System.out.println("O candidato 1 ganhou");
        } else if (candidato2 > candidato1) {
            System.out.println("O candidato 2 ganhou");
        } else {
            System.out.println("Foi um impate");
        }

        System.out.println("O candidato 1 teve " + candidato1 + " votos");

        System.out.println("O candidato 2 teve " + candidato2 + " votos");

        System.out.println("Foram um total de " + nulo + " votos nulos");

        System.out.println("Foram um total de " + branco + " votos brancos");

    }
}
