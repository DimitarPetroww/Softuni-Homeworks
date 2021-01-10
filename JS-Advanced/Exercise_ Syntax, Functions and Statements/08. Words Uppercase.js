function solve(string) {
    return string.match(/[\w]+/g).join(", ").toUpperCase()
}
