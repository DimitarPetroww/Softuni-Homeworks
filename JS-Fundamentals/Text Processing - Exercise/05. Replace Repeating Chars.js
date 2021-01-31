function solve(string) {
    let result=string.split("").reduce((a , b , i) => {
        if(string[i-1] !==b) {
            a+=b
        }
        return a
    }, "")
    console.log(result);

}
