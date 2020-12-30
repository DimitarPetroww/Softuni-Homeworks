function solve(n) {
    let matrix=[]

    for(let i=1;i<=n;i++) {
        for(let j=1;j<=n;j++) {
            matrix.push(n)
        }
        console.log(matrix.join(" "));
        matrix=[]
    }
}
