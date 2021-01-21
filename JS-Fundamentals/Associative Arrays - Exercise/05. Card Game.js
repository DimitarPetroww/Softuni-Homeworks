function solve(arr) {
    let obj={}
    const faces = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    }
    const types = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }
    for (const event of arr) {
        let [player , cards]=event.split(": ")
        if(obj.hasOwnProperty(player)) {
            let previousCards=obj[player]
            cards=cards.split(", ")
            cards.push(...previousCards)
            obj[player]=cards
        }else {
            obj[player]=cards.split(", ")
        }
    }
    for (const player of Object.keys(obj)) {
        let decks=obj[player].filter((x1, i, arr) => !arr.slice(i + 1).some(y => y === x1))
        let points=0
        for (const card of decks) {
            let [a , b , c]=card.split("")
            if(c===undefined) {
                points+=(faces[a] * types[b])
            }else {
                points+=faces[a+b] * types[c]
            }
        }
        obj[player]=points
    }
    let entries=Object.entries(obj)
    for (const [key , value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
