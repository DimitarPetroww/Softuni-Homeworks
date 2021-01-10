function solve(arr) {
    return Object.entries(arr.map(x=> x.split(" <-> "))
    .reduce((a , [town, population])=> {
        if(a[town]) {
            a[town]+=Number(population)
        }else {
            a[town]=Number(population)
        }
        return a 
    }, {}))
    .map(([a, v])=> `${a} : ${v}`)
    .join("\n")
}