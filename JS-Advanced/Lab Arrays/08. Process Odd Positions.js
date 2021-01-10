function solve(arr) {
    return arr.filter((_ , i)=> i % 2!==0).reverse().map(x=>x*2).join(" ")
}
