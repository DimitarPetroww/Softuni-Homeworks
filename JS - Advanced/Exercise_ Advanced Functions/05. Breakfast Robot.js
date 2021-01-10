function solution() {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    const stocks = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    const commands = {
        restock: ((el, quantity) => {
            stocks[el] += quantity
            return "Success"
        }),
        prepare: ((recipe, quantity) => {
            let product = Object.entries(recipes[recipe])
            for(let [key , value] of product) {
                if(stocks[key] < value * quantity) {
                    return `Error: not enough ${key} in stock`
                }
            }
            product.forEach(([item, count]) => {
                stocks[item]-=count * quantity
            })
            return "Success"
        }),
        report: ()=> {
           return Object.entries(stocks).map(([item , quantity]) =>`${item}=${quantity}`).join(" ")
        }
    }
    return function (string) {
        let [action, product, quantity] = string.split(" ")
        return commands[action](product , +quantity)
    }
}
