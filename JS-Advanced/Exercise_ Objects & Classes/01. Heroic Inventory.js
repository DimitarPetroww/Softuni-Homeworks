function solve(arr) {
    let result=[]
    arr.forEach(line=> {
        let [hero , level , items]=line.split(" / ")
        items=items ? items.split(", ") : [] 
        let obj= {
            name : hero,
            level: Number(level),
            items:items
        }
        result.push(obj)
    })
    return JSON.stringify(result)
}
