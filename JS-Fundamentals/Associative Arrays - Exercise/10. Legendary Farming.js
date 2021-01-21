function solve(arr) {
    arr = arr.split(" ").map((x) => x.toLowerCase())
    let ores = {
        shards: 0,
        fragments: 0,
        motes: 0
    }
    const legendaries= {
        shards : "Shadowmourne",
        fragments : "Valanyr",
        motes : "Dragonwrath"
    }
    let junk = {}
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = Number(arr[i])
        let type = arr[i + 1]
        if (ores[type] !== undefined) {
            ores[type] += quantity
            if(ores[type] >= 250) {
                ores[type]-=250
                console.log(`${legendaries[type]} obtained!`);
                break;
            }
        } else {
            if (junk.hasOwnProperty(type)) {
                junk[type] += quantity
            } else {
                junk[type] = quantity
            }
        }
    }

    ores=Object.entries(ores).sort((a , b) => {
        if(a[1] - b[1] !==0) {
            return b[1] - a[1]
        }
        return a[0].localeCompare(b[0])
    })
    junk=Object.entries(junk).sort((x , y ) => x[0].localeCompare(y[0]))

    ores.forEach((x)=> {
        console.log(`${x[0]}: ${x[1]}`);
    })
    junk.forEach((y) => {
        console.log(`${y[0]}: ${y[1]}`);
    })
}
