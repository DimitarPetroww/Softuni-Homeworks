function solve(n) {
    let number=String(n)
    let sum=0
    for(let i=0;i<number.length;i++) {
        let currentNum=Number(number[i])
        sum+=currentNum
    }
console.log(sum);
}
