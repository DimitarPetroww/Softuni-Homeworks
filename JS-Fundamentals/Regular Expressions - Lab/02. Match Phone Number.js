function solve(text) {
    let pattern=/\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g
    ///+359([ -])2\1\d{3}\1\d{4}\b/g
    let numbers=[]
    while((name=pattern.exec(text)) !== null) {
        numbers.push(name[0])
    }
    return numbers.join(", ")
}
