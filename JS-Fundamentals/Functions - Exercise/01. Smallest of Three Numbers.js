function solve(n1, n2, n3) {
    let arr = []
    const newArr = (x, y, z) => {
        arr.push(x, y, z)
        return arr;
    }
    let max=Number.MAX_SAFE_INTEGER
    const loop=(a) => {
        for(let i=0;i<a.length;i++) {
            let current=a[i]
            if(current < max) {
                max=current
                
            }

        }
        return max;
    }
    console.log(loop(newArr(n1 , n2 , n3)));
}
