/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp2;

/**
 *
 * @author Mesti
 */
public class EjercicioInicial2 {
    public static void main(String [] args) {
        int X = 7;
        int Y = 3;
        double N = 3.14;
        double M = 1.3;
        
        System.out.println("Defino: int X = 7, Y = 3; N = 3.14 M = 1.3");
        System.out.println("X + Y = " + (X+Y));
        System.out.println("X - Y = " + (X-Y));
        System.out.println("X * Y = " + (X*Y));
        System.out.println("X / Y = " + (X/Y));
        System.out.println("El resto de X/Y = " + (X-(Y*(X/Y))));
        System.out.println("N + M = " + (N+M));
        System.out.println("N - M = " + (N-M));
        System.out.println("N * M = " + (N*M));
        System.out.println("N / M = " + (N/M));
        System.out.println("El resto de N/M = " + (N-(M*(N/M))));
        System.out.println("2 * X = " + (2*X) + "; 2 * Y = " + (2*Y) + "; 2 * N = " + (2*N) + "; 2 * M = " + (2*M));
        System.out.println("X + Y + N + M = " + (X+Y+N+M));
        System.out.println("X * Y * N * M = " + (X*Y*N*M));
        
    }
    
}
