package com.company;

import java.util.Scanner;

public class Vending {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double coins = 0;
        String command = scanner.nextLine();
        while(!command.equals("Start")) {
            double coin = Double.parseDouble(command);
            if(coin == 0.1 || coin == 0.2 || coin ==0.5 || coin == 1 || coin ==2) {
                coins += coin;
            }else {
                System.out.printf("Cannot accept %.2f%n", coin);
            }
            command = scanner.nextLine();
        }

        String product = scanner.nextLine();
        while(!product.equals("End")) {
            double price = 0;

            switch (product) {
                case "Nuts":
                    price = 2;
                    break;
                case "Water":
                    price = 0.7;
                    break;
                case "Crisps":
                    price = 1.5;
                    break;
                case "Soda":
                    price = 0.8;
                    break;
                case "Coke":
                    price = 1;
                    break;
            }
            if(price == 0) {
                System.out.println("Invalid product");
            }
            else if(coins < price) {
                System.out.println("Sorry, not enough money");
            }else {
                coins -= price;
                System.out.printf("Purchased %s%n", product);
            }
            product = scanner.nextLine();
        }
        System.out.printf("Change: %.2f", coins);;
    }
}
