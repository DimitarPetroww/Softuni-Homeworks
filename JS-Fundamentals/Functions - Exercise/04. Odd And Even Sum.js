function solve(num) {
    let oddSum=0
    let evenSum=0
    num=String(num)
    for(let i=0;i<num.length;i++) {
        let current=Number(num[i])
        if(current % 2===0) {
            evenSum+=current
        }else {
            oddSum+=current
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
