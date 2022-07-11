/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pruebas;

import javax.swing.JOptionPane;

/**
 *
 * @author Mesti
 */
public class Empleo {
    public static void main(String[] args) {
        String[] empleo = {
            "Si",
            "No",
        };
        String resp;
        resp = (String) JOptionPane.showInputDialog(null, "Se siente a gusto con el proyecto al cual estara aportando su trabajo?", "Test de empleos", JOptionPane.DEFAULT_OPTION, icon, empleo, empleo[0]);
    }
}
