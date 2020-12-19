function solve(arr) {
    let result=[]
    let i=1
    arr.forEach(x=> {
        let current=i
        if(x==="add") {
            result.push(current)
        }else {
            result.splice(result.indexOf(current-1) , 1)
        }
        i++
    })
    if(result.length !==0) {
        console.log(result.join("\n"));
    }else {
        console.log('Empty')
    }
}
