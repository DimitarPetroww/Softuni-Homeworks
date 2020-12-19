function solve(arr , rotations) {
    for(let i=0;i<rotations;i++) {
        let removed=arr.shift()
        arr.push(removed)
    }
    console.log(arr.join(" "));
}
