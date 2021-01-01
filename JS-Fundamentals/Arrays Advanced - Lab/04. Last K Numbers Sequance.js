function solve(n , k) {
    let arr=[1]
    for(let i=1;i<n;i++) {
        let sum=0
        let command=arr.slice(-k)
        for(let i=0;i<command.length;i++) {
            sum+=Number(command[i])
        }
        arr.push(sum)
    }
    console.log(arr.join(" "));
}
