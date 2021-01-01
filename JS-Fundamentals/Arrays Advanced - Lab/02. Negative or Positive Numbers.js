function solve(arr) {
    return arr.reduce((a , b) => {
        a[b >= 0 ? "push" : "unshift"](b)
        return a
    }, []).join("\n")
}
