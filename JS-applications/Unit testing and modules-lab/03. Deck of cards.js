function solve(arr) {
    let pattern = /([23456789]|10|[JQKA])([SDHC])/

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }

    class Card {
        constructor(face, suit) {
            this.validate(face, suit)

            Object.assign(this, { face, suit: suits[suit] })

        }
        validate(face, suit) {
            if (!faces.includes(face) || !suits[suit]) {
                throw new Error()
            }
        }
        toString() {
            return this.face + this.suit
        }
    }
    let result=""

    for(let i=0;i<arr.length;i++) {
        if(!pattern.test(arr[i])) {
            result=`Invalid card: ${arr[i]}`
            break;
        }
        let match = arr[i].match(pattern)
        const [face, suit] = [match[1], match[2]]
        const card = Object.values(new Card(face, suit))
        result+=` ${card[0]}${card[1]}`
    }
    console.log(result);
}
solve(['5S', '3D', 'QD', '1C'])
