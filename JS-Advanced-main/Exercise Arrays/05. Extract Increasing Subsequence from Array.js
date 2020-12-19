function solve(arr) {
    arr.reduce((a , c)=> {
        if(c >= a) {
            a=c
            console.log(c);
        }
        return a
    }, Number.MIN_SAFE_INTEGER)
    
}
