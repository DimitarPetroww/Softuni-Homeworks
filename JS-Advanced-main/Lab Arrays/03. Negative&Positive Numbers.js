function solve(arr) {  
    let result=[]
    arr.forEach(x=> {
        if(x <0) {
            result.unshift(x)
        }else {
            result.push(x)
        }
    })
    console.log(result.join("\n"));
}
