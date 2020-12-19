function solve(arr,n) {
    let result=[]
    for(let i=0;i<arr.length;i++) {
        let num1=arr[i]
        for(let j=i+1;j<arr.length;j++) {
            let num2=arr[j]

            if(num1 + num2===n) {
                result.push(num1 , num2 )
                console.log(result.join(" "));
                result=[]
            }
        }
    }
}
