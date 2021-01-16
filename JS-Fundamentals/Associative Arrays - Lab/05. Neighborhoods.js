function solve(arr) {
    let neighborHoodNames=new Map()
    arr.shift().split(", ").forEach((x) => neighborHoodNames.set(x , []))
    for (const event of arr) {
        let [hood , person]=event.split(" - ")
        if(neighborHoodNames.has(hood)) {
            neighborHoodNames.get(hood).push(person)
        }
    }
    for (const hood of Array.from(neighborHoodNames).sort((a , b)=> b[1].length - a[1].length)) {
        console.log(`${hood[0]}: ${hood[1].length}`);
        hood[1].forEach(x => console.log(`--${x}`))
    }
}
