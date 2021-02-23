function solve(input) {
    let demonsAll = []
    let demons = input[0].split(/[,\s]+/g)
    const actions = {
        "*": (x) => Number(x) * 2,
        "/": (x) => Number(x) / 2
    }
    for (const line of demons) {
        if (/[\s,]/.test(line)) {
            continue;
        }
        let health
        let sum = 0
        let healthPattern = /[^0-9-+*\/.]/g
        let damagePattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g
        let action = line.match(/[*\/]/g)
        if (line.match(healthPattern) !== null) {
            health = line.match(healthPattern).map(x => x.charCodeAt(0)).reduce((a, b) => a + b, 0)
        }
        if (line.match(damagePattern) !==null) {
            let dmg = line.match(damagePattern).map(Number)
            dmg.forEach(x => {
                sum += x
            })
        }
        if(action !==null) {
            action.forEach(x => sum = actions[x](sum))
        }
        demonsAll.push({ name: line, health: health, damage: sum })

    }
    demonsAll.sort((a, b) => a.name.localeCompare(b.name)).forEach((y) => {
        console.log(`${y.name} - ${y.health} health, ${y.damage.toFixed(2)} damage`);
    })
}
