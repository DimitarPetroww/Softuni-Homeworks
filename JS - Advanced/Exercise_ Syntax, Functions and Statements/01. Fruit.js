function solve(fruit , weight , price) {
    return `I need $${(price * (weight/1000)).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`
}
