/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp1;

import java.util.Scanner;

/**
 *
 * @author Mesti
 */
public class CortarCadena {
    public static void main(String[] args) {
        System.out.println("Ingrese una palabra");
        Scanner s = new Scanner(System.in);
                String texto = s.nextLine();
                int longitud = texto.length();
                int mitad = longitud / 2;
                String parte1 = texto.substring(0, mitad);
                String parte2 = texto.substring(mitad, longitud);
                      System.out.println("La primer mitad de la palabra es: " + parte1);
                      System.out.println("Y la segunda mitad de la palabra es: " + parte2);
                      
                
                }
    
}
