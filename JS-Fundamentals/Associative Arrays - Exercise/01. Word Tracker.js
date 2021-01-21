function solve(arr) {
    let words=arr.shift().split(" ")
    let result=new Map(words.map(x => [x , 0]))
    for (const word of arr) {
        if(result.get(word) !== undefined) {
            result.set(word , result.get(word) + 1)
        }
    }
    let allWords=Array.from(result).sort((a , b)=> b[1] - a[1])
    allWords.forEach(x => console.log(`${x[0]} - ${x[1]}`))
}
