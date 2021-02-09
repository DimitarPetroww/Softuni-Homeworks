function solve(word , text) {
    let pattern=new RegExp(word.replace(/[.*+\-?^${}()|[\]\\]/g , '\\$&'))
    while(pattern.test(text)) {
        text=text.replace(pattern , "")
    }
    return text
}
