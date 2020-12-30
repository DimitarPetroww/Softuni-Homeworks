function solve(...arguments) {
    let obj = {}
    arguments.forEach(x => {
        console.log(`${typeof x}: ${x}`);
        obj[typeof x] = obj[typeof x] ? obj[typeof x] += 1 : obj[typeof x] = 1
    })
    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(([key, value]) => console.log(`${key} = ${value}`))
}
