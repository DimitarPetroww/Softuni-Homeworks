function inventory(arr) {
    let heroes= []
    for(let currentHero of arr) {
        let [heroName , lvl , items]=currentHero.split(" / ")
        let obj = {
            Hero : heroName,
            level : lvl,
            items : items.split(", ").sort((a, b) => a.localeCompare(b)).join(", ")
        }
        heroes.push(obj)
    }
    heroes=heroes.sort((a , b) => a.level - b.level)
    for(let hero of heroes) {
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }
}
