function solve(arr) {
    const step=arr.pop()
    return arr.filter((_, i) => i % step===0).join("\n")
}
