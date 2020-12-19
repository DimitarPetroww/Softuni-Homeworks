function solve(a, x, z) {
    if (!Array.isArray(a)) {
        return NaN
    }
    const start = Number(Math.max(0 , x))
    const end = Number(Math.min(a.length -1 , z))
    return Math.floor(a.map(Number).slice(start, end + 1).reduce((a, b) => a + b, 0) * 10) / 10
}
