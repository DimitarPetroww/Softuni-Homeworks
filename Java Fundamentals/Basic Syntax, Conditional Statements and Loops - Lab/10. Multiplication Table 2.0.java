package com.company;

import java.util.Scanner;

public class MultiplicationTable2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int multiplier = Integer.parseInt(scanner.nextLine());
        int i = Integer.parseInt(scanner.nextLine());

        do {
            System.out.printf("%d X %d = %d%n", multiplier, i, i * multiplier);
            i++;
        }
        while (i <= 10);
    }
}
