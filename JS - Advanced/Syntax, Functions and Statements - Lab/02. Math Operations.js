function solve(n1 , n2 , operator) {
    // '+', '-', '*', '/', '%', '**'. 
       let obj={
         "+": (n1, n2) => n1 + n2,
           "-": (n1, n2) => n1 - n2,
           "*": (n1, n2) => n1 * n2,
           "/": (n1, n2) => n1 / n2,
           "%": (n1, n2) => n1 % n2,
           "**": (n1, n2) => n1 ** n2,
     }
     return obj[operator](n1, n2)
 }