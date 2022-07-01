/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp3;

import java.util.Scanner;

/**
 *
 * @author Mesti
 */
public class Ejercicio01 {

    public static void main(String[] args) {
                Scanner s = new Scanner(System.in);
        System.out.println("Ingrese un número entero que quiera definir como par/impar");
        int valor = s.nextInt();
        if (valor % 2 == 0) {
            System.out.println("PAR");
        } else {
            System.out.println("IMPAR");
        }
    }

}
