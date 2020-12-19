function solve(arr) {
    let result=[]
    let count=0
    let max=Number.MIN_SAFE_INTEGER
    let maxResult=[]
    for(let i=0;i < arr.length;i++ ) {
        let current=arr[i]
        if(count > max) {
            max=count
            maxResult=[]
            for(let i=0;i<result.length;i++) {
                let num=result[i]
                maxResult.push(num)
            }
        }
        count=0
        result=[]
        for(let j=i;j<arr.length;j++) {
            let opposite=arr[j]
            if(current===opposite) {
                result.push(current)
                count++
            }else {
                break;
            }
        }
    }
    console.log(maxResult.join(" "));
}
