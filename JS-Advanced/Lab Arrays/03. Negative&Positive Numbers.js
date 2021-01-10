function solve(arr) {  
    return arr.reduce((a, x) => {
        if(x <0) {
            a.unshift(x)
        }else {
            a.push(x)
        }
        return a
    }, []).join("\n")
}
