function solve(arr) {
    let result=arr.reduce((a , b)=> {
        let [town , population]=b.split(" <-> ")
        if(a[town]) {
            a[town]+=Number(population)
        }else {
            a[town]=Number(population)
        }
        return a 
    }, {})
    Object.entries(result).forEach(([a, v])=> {
        console.log(`${a} : ${v}`);
    })
}
