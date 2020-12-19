function solve(matrix) {
    let isMagic=true
    matrix.forEach(row => {
        let rowSum=row.reduce((a , c)=> a+ c, 0)
        for(let i=0;i<matrix.length;i++) {
            let columnSum=0
            matrix.forEach(els=> {
                columnSum+=els[i] 
            })
            if(rowSum !==columnSum) {
                isMagic=false
            }
        }
    })
    console.log(isMagic);
}
