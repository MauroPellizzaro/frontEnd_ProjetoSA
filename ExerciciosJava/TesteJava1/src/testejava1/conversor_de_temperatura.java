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
public class conversor_de_temperatura {

    public static void main(String[] args) {

        double celcius, farenheits, kelvin;
        String letra;

        System.out.println("Por favor digite a temperatura");
        Scanner leitor = new Scanner(System.in);
        celcius = Float.parseFloat(leitor.next());
        farenheits = (celcius * 1.8) + 32.00;
        kelvin = celcius + 273;
        System.out.println("Digite K se quiser converter para Kelvin e F para farenheits");
    
        letra = leitor.next();
        
        if (letra.equalsIgnoreCase("K")) {
            System.out.println("Em kelvin, a temperatura de " + celcius + " celcius, é de " + kelvin);
        } else {
            System.out.println("Em farenheits, a temperatura de " + celcius + " celcius, é de " + farenheits);
        }

    }
}
