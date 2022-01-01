package com.company;

import java.util.Scanner;

public class Ages {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String period = "";

        int age = Integer.parseInt(scanner.nextLine());

        if(age >= 0 && age <= 2) {
            period = "baby";
        }else if(age >=3 && age <=13) {
            period = "child";
        }else if(age >= 14 && age <= 19) {
            period = "teenager";
        }else if(age >= 20 && age <= 65) {
            period = "adult";
        }else if(age >= 66) {
            period = "elder";
        }

        System.out.println(period);
    }
}
