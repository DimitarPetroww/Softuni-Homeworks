package com.company;

import java.util.Scanner;

public class UpperOrLower {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char letter = scanner.nextLine().charAt(0);

        System.out.println(letter == Character.toUpperCase(letter) ? "upper-case" : "lower-case");
    }
}
