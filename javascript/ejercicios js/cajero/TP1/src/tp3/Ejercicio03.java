/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp3;

import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author Mesti
 */
public class Ejercicio03 {
    public static void main(String [] args) throws IOException {
        Scanner s = new Scanner(System.in);
        char car;        
                System.out.println("Ingrese un caracter de tipo letra mayúscula");
                car = (char) System.in.read() ;
                if ((int)car < 91 && (int)car > 64) {
                    System.out.println("Es Mayúscula");
                } else {
                System.out.println("No es una myúscula");
            }
    }
}
