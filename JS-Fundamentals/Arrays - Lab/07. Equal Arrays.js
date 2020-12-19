function solve(arr1, arr2) {
    let index1=0
    let index2=0
    let result=0
    let count=0
    let areEqual=false
    while(index1 < arr1.length) {
        let num1=Number(arr1[index1])
        let num2=Number(arr2[index2])

        if(num1===num2) {
            result+=num1
            areEqual=true
        }else if(!(num1===num2)) {
            areEqual=false
            console.log(`Arrays are not identical. Found difference at ${count} index`);
            break;
        }
        index1++
        index2++
        count++
    }
    if(areEqual) {
        console.log(`Arrays are identical. Sum: ${result}`);
    }
}
