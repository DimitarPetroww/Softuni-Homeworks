function solve(arr) {
    let storage=new Map()
    for (const word of arr) {
        if(storage.has(word)) {
            storage.set(word , storage.get(word) + 1)
        }else {
            storage.set(word , 1)
        }
    }
    //let result=Array.from(storage).sort((a , b) => b[1] - a[1])
    for (const [word , counter] of Array.from(storage).sort((a , b) => b[1] - a[1])) {
        console.log(`${word} -> ${counter} times`);
    }
}
