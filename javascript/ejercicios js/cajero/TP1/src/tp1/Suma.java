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
public class Suma {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
                System.out.println("Ingrese un número");
                        int x = s.nextInt();
                        System.out.println("Ingrese el segundo número");
                        int y = s.nextInt();
                        int resultado = x + y;
                                System.out.println("La suma es: " + x + " + " + y + " = " + resultado );
                             
                                
    }
    
}

