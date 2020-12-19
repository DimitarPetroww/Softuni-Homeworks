function solve(n , k) {
    let result=[1]
    for(let i=1;i<n;i++) {
        result.push(result.slice(-k).reduce((a , v)=> a + v , 0))
    }
    console.log(result.join(" "));
}
