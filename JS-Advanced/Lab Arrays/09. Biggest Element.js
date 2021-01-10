function solve(matrix) {
    return matrix.map(x=>Math.max(...x)).sort((a ,b)=> b - a).slice(0,1).join("")
}
