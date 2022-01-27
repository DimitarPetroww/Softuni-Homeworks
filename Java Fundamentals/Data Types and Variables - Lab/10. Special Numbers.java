package com.company;

import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for(int i = 1; i <= n; i++) {
            int sum = 0;
            String number = Integer.toString(i);
            for(int j = 0; j < number.length(); j++) {
                sum += Character.getNumericValue(number.charAt(j));
            }
            boolean isSpecial = sum == 5 || sum == 7 || sum == 11;

            System.out.printf(isSpecial ? "%d -> True%n" : "%d -> False%n", i);
        }
    }
}
