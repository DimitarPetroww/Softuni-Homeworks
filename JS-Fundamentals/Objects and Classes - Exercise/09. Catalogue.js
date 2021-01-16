function solve(arr) {
    var spare = {}
    let obj = {}
    let dictionary = function () {
        for (let product of arr) {
            const letter = product[0]
            spare[letter] = []
        }
        return spare
    }
    obj = dictionary()
    arr.forEach(product => {
        const letter = product[0]
        product = product.split(" : ").join(": ")
        obj[letter].push(product)
    })
    obj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    for (let current of obj) {
        console.log((`${current[0]}
  ${current[1].sort((a, b) => a.localeCompare(b)).join("\n  ")}`))
    }

}
