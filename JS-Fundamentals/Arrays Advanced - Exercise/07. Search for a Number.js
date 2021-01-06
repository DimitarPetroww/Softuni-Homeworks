function solve(arr , rules) {
    let elements=rules[0]
    let deleteEl=rules[1]
    let search=rules[2]
    let count=0

    arr.length=elements
    arr.splice(0 , deleteEl)
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===search) {
            count++
        }
   }
        return `Number ${search} occurs ${count} times.`
}
