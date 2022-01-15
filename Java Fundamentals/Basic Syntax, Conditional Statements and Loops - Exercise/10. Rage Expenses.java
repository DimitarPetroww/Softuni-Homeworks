package com.company;

import java.util.Scanner;

public class RageExpenses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        double headsetPrice = Double.parseDouble(scanner.nextLine());
        double mousePrice = Double.parseDouble(scanner.nextLine());
        double keyboardPrice = Double.parseDouble(scanner.nextLine());
        double displayPrice = Double.parseDouble(scanner.nextLine());

        int keyboardTrashed = 0;

        double price = 0;

        for (int i = 1; i <= count; i++) {
            if(i % 2 == 0) {
                price += headsetPrice;
            }
            if(i % 3 == 0) {
                price += mousePrice;
            }

            if(i % 3 == 0 && i % 2 == 0) {
                price += keyboardPrice;
                keyboardTrashed++;
                if(keyboardTrashed % 2 == 0) {
                    price += displayPrice;
                }
            }
        }
        System.out.printf("Rage expenses: %.2f lv.", price);
    }
}
