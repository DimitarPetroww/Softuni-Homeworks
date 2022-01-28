package com.company;

import java.util.Scanner;

public class SumDigits {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int integer = Integer.parseInt(scanner.nextLine());
        int sum = 0;

        while(integer > 0) {
            sum += integer % 10;
            integer = integer / 10;
        }
        System.out.println(sum);
    }
}
