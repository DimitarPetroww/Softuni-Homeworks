function solve(arr) {
    let days=[]
    arr.map(Number)
    while(arr.some(x => x!==30) ){
        let sum=0
        for(let i=0;i<arr.length;i++) {
            if(arr[i] < 30) {
                arr[i]++
                sum+=195
            }
        }
        days.push(sum)
    }
    console.log(days.join(", "));
    let sum=0
    for(let v=0;v<days.length;v++) {
        let current=days[v]
        sum+=current
    }
    console.log(`${sum * 1900} pesos`);
}
