package com.company;

import java.util.Scanner;

public class Equipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double money = Double.parseDouble(scanner.nextLine());

        int people = Integer.parseInt(scanner.nextLine());
        double saberPrice = Double.parseDouble(scanner.nextLine());
        double robePrice = Double.parseDouble(scanner.nextLine());
        double beltPrice = Double.parseDouble(scanner.nextLine());

        int beltsFree = people / 6;

        double price = saberPrice * (Math.ceil(people + 0.1 * people)) + robePrice * people + beltPrice * (people - beltsFree);

        if(price <= money) {
            System.out.printf("The money is enough - it would cost %.2flv.", price);
        }else {
            System.out.printf("George Lucas will need %.2flv more.", price - money);
        }
    }
}
