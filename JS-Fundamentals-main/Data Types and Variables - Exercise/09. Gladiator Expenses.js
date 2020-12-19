function solve(loses, helmetP, swordP, shielP, armorP) {
    let count = 0
    let price = 0
    for (let i = 1; i <= loses; i++) {
        if (i % 2 === -0) {
            if (i % 3 === 0) {
                price += helmetP + swordP + shielP
                count++
            } else {
                price += helmetP
            }
        } else if (i % 3 === 0) {
            price += swordP
        } if (count % 2 === 0 && count !==0) {
            count=0
            price += armorP
        }
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
