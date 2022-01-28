package com.company;

import java.util.Scanner;

public class WaterOverflow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int liters = 255;
        int poured = 0;

        for(int i = 0; i < n; i++) {
            int current = Integer.parseInt(scanner.nextLine());
            if(liters >= current) {
                liters -= current;
                poured += current;
            }else {
                System.out.println("Insufficient capacity!");
            }
        }
        System.out.println(poured);
    }
}
