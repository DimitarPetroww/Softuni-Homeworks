function solve(string) {
    let arr=Array.from(string)
    let result=[]
    let word=""
    for(let i=0;i<arr.length;i++) {
        word+=`${arr[i]}`
        if(arr[i+1] !==undefined) {
            if(arr[i+1]===arr[i+1].toUpperCase()) {
                result.push(word)
                word=""
            }
        }else {
            result.push(word)
        }
    }
    console.log(result.join(", "));
}
