function solve(n1 , n2) {
    let output=""
    let sum=0
    for(let i=n1;i<=n2;i++) {
        output+=`${i} `
        sum+=i
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
