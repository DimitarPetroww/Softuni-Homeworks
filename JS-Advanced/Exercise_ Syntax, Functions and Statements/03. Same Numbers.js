function solve(num) {
    let common=String(num).split("")[0]
    return [
    String(num).split("").every(x=> x ===common),
    String(num).split("").map(x=> Number(x)).reduce((a , c)=> a + c , 0)
    ].join("\n")

}
