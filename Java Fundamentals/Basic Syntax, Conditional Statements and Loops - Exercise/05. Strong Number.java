package com.company;

import java.util.Scanner;

public class StrongNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String arg = scanner.nextLine();
        int sum = 0;

        for(int i = 0; i < arg.length(); i++) {
            int factorial = 1;
            int num = Character.getNumericValue(arg.charAt(i));
            for(int j = 1; j <= num; j++) {
                factorial *= j;
            }
            sum += factorial;
        }
        System.out.println(sum == Integer.parseInt(arg) ? "yes" : "no");
    }
}
