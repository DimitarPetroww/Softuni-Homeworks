function solve(arr) {
    let newArr=[]
    let sum1=0
    let sum2=0
    for (let i=0;i<arr.length;i++) {
        let number=Number(arr[i])
        sum1+=number
        if(number % 2 ===0) {
            number+=i
        }else {
            number-=i
        }
        sum2+=number
        newArr.push(number)
    }
    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}
