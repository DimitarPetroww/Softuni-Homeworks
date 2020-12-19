function solve(x, y, z) {
    let t=(x.length * y.length) * z.length / 2
    return `The plate was rotated ${Math.ceil(t / 2.5)} times.`
}
