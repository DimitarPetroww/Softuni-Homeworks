function solve() {
    class fighter {
        constructor(name) {
            [this.name , this.health , this.stamina]=[name , 100 , 100]
        }
        fight() {
            this.stamina--
            console.log(`${this.name} slashes at the foe!`);
        }
    }
    class mage {
        constructor(name) {
            [this.name , this.health , this.mana]=[name , 100 , 100]
        }
        cast(spell) {
            this.mana--
            console.log(`${this.name} cast ${spell}`)
        }
    }

    return {
        mage : (name) => new mage(name),
        fighter : (name) => new fighter(name)
    }
}
