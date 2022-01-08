package com.company;

import java.util.Scanner;

public class Triangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        for(int i = 1; i <= n; i++) {
            String row = "";
            for(int j = 1; j <= i; j++) {
                row += i + " ";
            }
            System.out.println(row);
        }
    }
}
