/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp4;

/**
 *
 * @author Mesti
 */
public class TP1XDo {

    public static void main(String[] args) {
        int x = 1;
        do {
            System.out.println("valor de x : " + x);
            x++;
            if (x > 4) {
                break;
            }
        } while (x < 101);
    }
}