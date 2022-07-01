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
public class Ejercicio12 {

    public static void main(String[] args) {
        //Declaraciones
        Scanner s = new Scanner(System.in);
        //Desarrolle
        System.out.print("Verificaremos sí la hora que ingresa el usuario es un formato válido. \nIngrese la hora:\n");
        int H = s.nextInt();
        if (H < 24 && H >= 0) {
            System.out.println("Ingrese los minutos:");
            int M = s.nextInt();
            if (M < 60 && M >= 0) {
                System.out.println("Ingrese los segundos:");
                int S = s.nextInt();
                if (S < 60 && S >= 0) {
                    System.out.println(H + ":" + M + ":" + S + ". La hora ingresada es válida");

                } else {
                    System.out.println("Los segundos ingresados no son válidos");
                }
            } else {
                System.out.println("Los minutos ingresados no son válidos");
            }
        } else {
            System.out.println("La hora ingresada no es válida");
        }
    }
}
