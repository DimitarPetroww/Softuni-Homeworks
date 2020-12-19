function solve(n) {
    let boolean=String(n.toString().split("").map(x => Number(x)).reduce((a, v) => a + v, 0))
    .match(/[0-9]/g)
    .some(x=> x=="9")
    return `${n} Amazing? ${boolean ? "True" : "False"}`
}
