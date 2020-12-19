function solve(input) {
    let data=input.map(x=> x.split("|").filter(y=> y!=="").map(x=> x.trim()))
    let properties=data.shift()
    let result=data.reduce((a , b)=> {
        a.push({
            [properties[0]]:b[0],
            [properties[1]]:parseFloat(Number(b[1]).toFixed(2)),
            [properties[2]]:parseFloat(Number(b[2]).toFixed(2))
        })
        return a
    }, [])
    console.log(JSON.stringify(result));

}
