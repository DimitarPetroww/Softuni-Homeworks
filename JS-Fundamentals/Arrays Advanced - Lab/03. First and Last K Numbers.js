function solve(arr) {
    let k=arr.shift()
    return [
        arr.slice(0 , k).join(" "),
        arr.slice(-k).join(" ")
    ].join("\n")
 
}
