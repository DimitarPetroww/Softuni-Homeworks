function solve(arr) {
    let result={}
    arr.forEach(x=> {
        let [product , price]=x.split(" : ")
        if(result[product[0]]) {
            result[product[0]][product]=Number(price)
        }else {
            result[product[0]]={[product] : Number(price)}
        }
    })
    result=Object.entries(result).
    sort((a , b)=> a[0].localeCompare(b[0]))
    .forEach(x=> {
        console.log(`${x[0]}`);
        Object.entries(x[1])
        .sort((x,y)=> x[0].localeCompare(y[0]))
        .forEach(x=> {
            console.log(`  ${x[0]}: ${x[1]}`);
        })
    })
}
