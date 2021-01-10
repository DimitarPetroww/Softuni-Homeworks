function solve(arr) {  
    return arr.reduce((a, x) => {
        a[x < 0 ? "unshift" : "push"](x)
        return a
    }, []).join("\n")
}
