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
public class TP1XFor {

    public static void main(String args[]) {
        for (int x = 1; x < 101; x++) {
            if (x > 4) {
                break;
            } else {
                System.out.println("valor de x : " + x);
            }
        }
    }
}
