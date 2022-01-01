package com.company;

import java.util.Scanner;

public class Login {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username = scanner.nextLine();

        String password = scanner.nextLine();

        for(int i = 1; i < 4; i++) {
            String reversed = "";
            for(int j = password.length() - 1; j >= 0; j--) {
                reversed += password.charAt(j);
            }

            if(reversed.equals(username)) {
                System.out.printf("User %s logged in.", username);
                return;
            }else {
                System.out.println("Incorrect password. Try again.");
                password = scanner.nextLine();
            }
        }

        System.out.printf("User %s blocked!", username);
    }
}
