function solve(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<work>\w+)>[^|$%.]*?\|(?<count>[\d]+)\|[^|$%.]*?(?<price>[\d]+.*?[\d]*)\$/
    let customers = arr.slice(0, arr.length - 1)
    let totalMoney = 0

    for (let i = 0; i < customers.length; i++) {
        if ((current = pattern.exec(customers[i])) !== null) {
            let moneyPerPerson = current.groups["count"] * current.groups["price"]
            totalMoney += moneyPerPerson
            console.log(`${current.groups["name"]}: ${current.groups["work"]} - ${moneyPerPerson.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}03. SoftUni Bar Income
