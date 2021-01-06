function solve(arr) {
    arr.sort((x , y) => {
        if(x.length-y.length !==0) {
            return x.length-y.length
        }else { 
            return x.toLowerCase().localeCompare(y.toLowerCase())
        }
    })
    console.log(arr.join("\n"));
}
