function solve(data) {
    return Array.from( data
        .map( x => x.split(' | ').map(x => isNaN(x) ? x : Number(x)))
        .reduce( (a,b) => {
            if(!a.has(b[1])){
                a.set(b[1], new Map())
            }
            a.get(b[1]).set(b[0], Number(b[2]))
            return a
        },new Map()))
        .map( ([x, rest]) => {
            let r = [...rest].reduce( (a,b) => {
                if(a[1] > b[1]) { return b }
                return a
            })
            return `${x} -> ${r[1]} (${r[0]})`
        }).join( '\n')
}