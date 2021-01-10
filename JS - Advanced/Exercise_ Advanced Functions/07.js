function solution() {
    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let { upvotes, downvotes } = this
            let total = downvotes + upvotes
            let balance = upvotes - downvotes
            let obfuscated = 0
            if (total > 50) {
                obfuscated = Math.ceil(0.25 * Math.max(upvotes, downvotes))
            }
            if (upvotes / total > 0.66 && total >=10) rating = "hot"
            else if (balance < 0 && total >= 10) rating = "unpopular"
            else if (!(upvotes / total > 0.66) && balance >= 0 && (upvotes > 100 || downvotes > 100)) rating = "controversial"
            else rating = "new"

            return [upvotes + obfuscated, downvotes+ obfuscated, balance, rating]
        }
    }
    let command=arguments[0]
    return commands[command]()
}