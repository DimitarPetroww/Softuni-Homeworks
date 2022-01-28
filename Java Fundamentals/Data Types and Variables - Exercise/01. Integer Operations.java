package com.company;

import java.math.BigDecimal;
import java.util.Scanner;

public class IntegerOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BigDecimal number = new BigDecimal(scanner.nextLine());
        BigDecimal add = new BigDecimal(scanner.nextLine());
        BigDecimal divider = new BigDecimal(scanner.nextLine());
        BigDecimal multiplier = new BigDecimal(scanner.nextLine());

        number = number.add(add);
        number = number.divide(divider);
        number = number.multiply(multiplier);
        System.out.println(number);
    }
}
