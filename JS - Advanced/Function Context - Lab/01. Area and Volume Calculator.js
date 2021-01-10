function solve(area , vol , input) {
    let result=[]
    JSON.parse(input).forEach(x=> {
        result.push({
            area : Math.abs(area.call(x)),
            volume : Math.abs(vol.call(x))
        })
    })
    return result
}