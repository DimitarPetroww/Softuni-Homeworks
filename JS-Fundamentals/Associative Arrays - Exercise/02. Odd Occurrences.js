function solve(arr) {
    let storage = new Map()
    for (const word of arr.split(" ")) {
        if (isNaN(Number(word))) {
            if (storage.has(word.toLocaleLowerCase())) {
                storage.set(word.toLocaleLowerCase(), storage.get(word.toLocaleLowerCase()) + 1)
            } else {
                storage.set(word.toLocaleLowerCase(), 1)
            }
        } else {
            if (storage.has(word)) {
                storage.set(word, storage.get(word) + 1)
            } else {
                storage.set(word, 1)
            }
        }
    }
    let result=[]
    Array.from(storage).filter((x) => {
        if(x[1] % 2 !==0) {
            result.push(x[0])
        }
    })
    console.log(result.join(" "));
}
