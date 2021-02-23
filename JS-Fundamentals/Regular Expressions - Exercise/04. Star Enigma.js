function solve(input) {
    let planets= {
        attacked : [],
        destroyed : []
    }
    for (const line of input.slice(1)) {
        
        let keyPattern=/[star]/gmi
        if(line.match(keyPattern)) {
            var key=line.match(keyPattern).length
        }else {
            var key=0
        }

        const message=line.split("").map((x)=> String.fromCharCode(x.charCodeAt(0) - key)).join("")
        const messagePattern=/(?:[^-@!:>]+)?@(?<name>[A-Za-z]+)(?:[^-@!:>]+)?:(?<population>[\d]+)(?:[^-@!:>]+)!(?<type>[AD])!(?:[^-@!:>]+)?->(?<soldiers>[\d]+)(?:[^-@!:>]+)?/gm
        const matches=messagePattern.exec(message)
        if(matches) {
            const { name , population , type , soldiers}=matches.groups

            if(type==="A") {
                planets.attacked.push(name)
            }else if(type==="D") {
                planets.destroyed.push(name)
            }
        }
    }
    console.log(`Attacked planets: ${planets.attacked.length}`);
    if(planets.attacked.length >0) {
        planets.attacked.sort((a , b)=> a.localeCompare(b)).forEach(x=> console.log(`-> ${x}`))
    }
    console.log(`Destroyed planets: ${planets.destroyed.length}`);
    if(planets.destroyed.length >0) {
        planets.destroyed.sort((a , b)=> a.localeCompare(b)).forEach(x=> console.log(`-> ${x}`))
    }
}
