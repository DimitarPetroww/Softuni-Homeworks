function solve(n1, n2) {
    let factorial1 = n1
    let factorial2 = n2
    let firstFactorial = (x) => {
        for (let i = x - 1; i > 0; i--) {
            factorial1 *= i
        }
        return factorial1
    }
    let secondFactorial = (y) => {
        for (let j = y - 1; j > 0; j--) {
            factorial2 *= j
        }
        return factorial2

    }
    console.log((firstFactorial(n1)/secondFactorial(n2)).toFixed(2));
}
