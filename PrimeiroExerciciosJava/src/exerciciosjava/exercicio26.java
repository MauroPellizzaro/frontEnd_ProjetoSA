package exerciciosjava;

import java.util.Scanner;

public class exercicio26 {

    public static void main(String[] args) {
        int canal3 = 0;
        int canal5 = 0;
        int canal8 = 0;
        int canal11 = 0;
        int canal13 = 0;
        int ncasas = 0;
        int votostotais = 0;
        int pessoasvendo = 0;

        System.out.println("Quantas casas participaram da pesquisa?");

        Scanner leitor = new Scanner(System.in);
        ncasas = leitor.nextInt();

        for (int i = 0; i < ncasas; i++) {
            System.out.println("Quantas pessoas estavam assistindo ao canal 3 na casa " + (i + 1));
            pessoasvendo = leitor.nextInt();
            canal3 = pessoasvendo + canal3;
            System.out.println("Quantas pessoas estavam assistindo ao canal 5 na casa " + (i + 1));
            pessoasvendo = leitor.nextInt();
            canal5 = pessoasvendo + canal5;
            System.out.println("Quantas pessoas estavam assistindo ao canal 8 na casa " + (i + 1));
            pessoasvendo = leitor.nextInt();
            canal8 = pessoasvendo + canal8;
            System.out.println("Quantas pessoas estavam assistindo ao canal 11 na casa " + (i + 1));
            pessoasvendo = leitor.nextInt();
            canal11 = pessoasvendo + canal11;
            System.out.println("Quantas pessoas estavam assistindo ao canal 13 na casa " + (i + 1));
            pessoasvendo = leitor.nextInt();
            canal13 = pessoasvendo + canal13;
        }
        votostotais = canal3 + canal5 + canal8 + canal11 + canal13;
        System.out.println("Abaixo, aparecerá a porcentagem de pessoas assistindo a cada canal");
        System.out.println("Canal 3: " + (canal3 * 100 / votostotais) + "%");

        System.out.println("Abaixo, aparecerá a porcentagem de pessoas assistindo a cada canal");
        System.out.println("Canal 5: " + (canal5 * 100 / votostotais) + "%");

        System.out.println("Abaixo, aparecerá a porcentagem de pessoas assistindo a cada canal");
        System.out.println("Canal 8: " + (canal8 * 100 / votostotais) + "%");

        System.out.println("Abaixo, aparecerá a porcentagem de pessoas assistindo a cada canal");
        System.out.println("Canal 11: " + (canal11 * 100 / votostotais) + "%");

        System.out.println("Abaixo, aparecerá a porcentagem de pessoas assistindo a cada canal");
        System.out.println("Canal 13: " + (canal13 * 100 / votostotais) + "%");

    }
}
