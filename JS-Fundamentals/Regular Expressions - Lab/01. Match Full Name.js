function solve(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g
    let names=[]
    while((name=pattern.exec(text)) !==null) {
        names.push(name)
    }
   return names.join(" ")
}
