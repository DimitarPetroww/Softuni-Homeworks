function solve(product , quantity) {
    let products= { 
        water : 1,
        coffee : 1.50,
        coke : 1.40,
        snacks : 2
    }
    return (products[product] * quantity).toFixed(2)
}
