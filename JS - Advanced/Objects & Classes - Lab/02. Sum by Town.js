function solve(arr) {
    let result=arr.reduce((a , b , i)=> {
        if(i % 2 ===0) {
            if(a[b]) {
                a[b]+=Number(arr[i+1])
            }else {
                a[b]=Number(arr[i+1]);
            }
        }
        return a
    }, {})
    console.log(JSON.stringify(result));
}