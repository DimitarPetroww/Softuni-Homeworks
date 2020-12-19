function solve(a , b) {
    let lower=Math.min(a , b)
    let bigger=Math.max(a , b)
    let result=0
    for(let i=lower;i>=0;i--) {
        if(bigger % i===0 && lower % i===0) {
            result=i
            break;
        }
    }
    return result
}
