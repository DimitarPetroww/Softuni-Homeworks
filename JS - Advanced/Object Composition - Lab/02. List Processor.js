function solve(input) {
    let list = []
    let result = {
        add: (text) => list.push(text),
        remove: (text) => list = list.filter(x => x !== text),
        print: () => console.log(list.join(","))
    }

    input.map(x => x.split(" ")).forEach(([a, b]) => result[a](b))
}