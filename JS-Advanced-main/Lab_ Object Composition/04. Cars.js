function solve(input) {
    const cars = {}
    let carFactory = (function () {
        return {
            create: (name, inherit, parentElement) => cars[name] = inherit ? Object.create(cars[parentElement]) : {},
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let result=[]
                for (let key in cars[name]) {
                    result.push(`${key}:${cars[name][key]}`)
                }
                console.log(result.join(", "));
            }
        }
    })()
    input
        .map(x => x.split(" "))
        .forEach(([command,
            ...args
        ]) => carFactory[command].apply(null, args))
}
