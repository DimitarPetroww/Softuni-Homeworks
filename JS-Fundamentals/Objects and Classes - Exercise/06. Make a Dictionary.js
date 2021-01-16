function dictionary(arr) {
    let result = {}
    for(let current of arr) {
        let obj=JSON.parse(current)
        let key=Object.keys(obj)
        let value=Object.values(obj)
        result[key]=value
    }
    result=Object.entries(result).sort((a , b)=>a[0].localeCompare(b[0]))
    for(let i=0;i<result.length;i++) {
        console.log(`Term: ${result[i][0]} => Definition: ${result[i][1]}`);
    }
}
