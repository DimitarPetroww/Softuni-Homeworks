function solve(arr) {
    let c=Number.MIN_SAFE_INTEGER
    return arr.reduce((a , b)=> {
        if(b >= c) {
            c=b
            a.push(b)
        }
        return a
    }, []).join("\n")
}
