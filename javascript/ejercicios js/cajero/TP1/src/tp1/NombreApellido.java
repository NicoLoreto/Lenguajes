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
public class NombreApellido {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
         System.out.println("Ingrese su primer nombre");
         String nombre = s.next();
         System.out.println("Ingrese su apellido");
         String apellido = s.next();
         System.out.println("Nombre completo: " + nombre + " " + apellido);
    }
}
