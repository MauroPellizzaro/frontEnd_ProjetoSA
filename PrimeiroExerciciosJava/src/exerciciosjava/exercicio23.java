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
public class exercicio23 {

    public static void main(String[] args) {
        float kmtotal = 0;
        float km = 0;
        int cidadespercorridas = 0;
        Scanner leitor = new Scanner(System.in);

        while (kmtotal <= 4000) {
            System.out.println("Por favor, digite a quilometragem rodada desde a última cidade");
            km = Float.parseFloat(leitor.next());
            kmtotal = kmtotal + km;
            cidadespercorridas++;
        }
        
        System.out.println("O total de cidade percorridas para percorrer "+kmtotal+" km, foi de "+cidadespercorridas);

    }

}
