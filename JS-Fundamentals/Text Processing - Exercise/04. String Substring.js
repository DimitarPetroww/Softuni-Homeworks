function solve(word , text) {
    for (const currentWord of text.split(" ")) {
        if(currentWord.toLowerCase()===word.toLowerCase()) {
            return word
        }
    }
    return `${word} not found!`
}
