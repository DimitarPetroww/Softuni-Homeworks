function solve(n , arr) {
    let newArr=[]
    for (let i=0;i<n ; i++) {
        newArr.push(arr[i])
    }
    newArr.reverse()
    console.log(newArr.join(" "));
}
