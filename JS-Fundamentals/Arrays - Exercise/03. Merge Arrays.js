function solve(arr1 , arr2) {
    let index=0
    let result=[]

    while(index < arr1.length) {
        let var1=arr1[index]
        let var2=arr2[index]
        if(index % 2===0) {
            result.push(Number(var1) + Number(var2))
        }else {
            result.push(var1 + var2)
        }
        index++
    }
    console.log(result.join(" - "));
}
