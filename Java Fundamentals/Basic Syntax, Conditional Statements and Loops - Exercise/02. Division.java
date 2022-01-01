package com.company;

import java.util.Scanner;

public class Division {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int divider = 0;

        if(n % 2 == 0) {
            divider = 2;
        }if(n % 3 == 0) {
            divider = 3;
        }if(n % 6 == 0) {
            divider = 6;
        }if(n % 7 == 0) {
            divider = 7;
        }if(n % 10 == 0) {
            divider = 10;
        }


        if(divider != 0) {
            System.out.printf("The number is divisible by %d", divider);
        }else {
            System.out.println("Not divisible");
        }
    }
}
