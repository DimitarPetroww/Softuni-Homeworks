function solve(arr) {
    let rotates=arr.pop() % arr.length
    for(let i=0;i<rotates;i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(" "));
}
