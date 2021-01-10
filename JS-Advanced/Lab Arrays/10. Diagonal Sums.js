function solve(matrix) {
    let sum1=0
    let sum2=0
    let i=0
    matrix.forEach(x=> {
        sum1+=x[i]
        sum2+=x[x.length-1-i]
        i++
    })
    return [sum1 , sum2].join(" ")
}
