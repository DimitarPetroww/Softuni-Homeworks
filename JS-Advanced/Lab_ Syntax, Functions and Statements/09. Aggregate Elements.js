function solve(arr) {
    return [arr.reduce((a , v)=> a + v , 0),
    arr.reduce((a , c)=> a + 1 / c , 0),
    arr.reduce((a , p)=> a + p , "")].join("\n")
}
