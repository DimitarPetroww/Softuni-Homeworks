function card(face , suit) {
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
    return new Card(face ,suit)
}
