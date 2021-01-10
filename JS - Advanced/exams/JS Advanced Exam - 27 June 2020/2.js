function solveClasses() {
    class Pet {
        constructor(owner , name) {
            [this.owner , this.name , this.comments]=[owner , name , []]
        }
        addComment(comment) {
            if(!this.comments.includes(comment)) {
                this.comments.push(comment)
                return "Comment is added."
            }
            throw new Error("This comment is already added!")
        }
        feed() {
            return `${this.name} is fed`
        }
        toString() {
            let msg= `Here is ${ this.owner }'s pet ${ this.name }.`
            if(this.comments.length > 0) {
                msg+=`\nSpecial requirements: ${this.comments.join(", ")}`
            }
            return msg
        }
    }
    class Cat extends Pet {
        constructor(owner , name , insideHabits , scratching) {
            super(owner , name)
            this.insideHabits=insideHabits
            this.scratching=scratching
        }
        feed() {
            return super.feed() + ", happy and purring."
        }
        toString() {
            let msg=`${super.toString()}\nMain information:\n`
            msg+=`${ this.name } is a cat with ${ this.insideHabits }`
            if(this.scratching) {
                msg+=`, but beware of scratches.`
            }
            return msg
        }
    }
    class Dog extends Pet{
        constructor(owner , name , runningNeeds, trainability) {
            super(owner , name)
            this.runningNeeds=runningNeeds
            this.trainability=trainability
        }
        feed() {
            return super.feed() + ", happy and wagging tail."
        }
        toString() {
            return `${super.toString()}\nMain information:\n${ this.name } is a dog with need of ${ this.runningNeeds }km running every day and ${ this.trainability } trainability.`
        }
    }



    return {
        Pet,
        Cat,
        Dog
    }
}
