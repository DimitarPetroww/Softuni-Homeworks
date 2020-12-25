function solve(arr) {
    Object.entries(arr.reduce((a , v) => {
        let [country , town , price]=v.split(" > ")
        if(a[country]) {
            if(a[country][town]) {
                if(a[country][town] > price) {
                    a[country][town]= +price
                }
            }else {
                a[country][town]= +price
            }
        }else {
            a[country]={[town] : +price}
        }
        return a
    }, {})).sort((a , b)=> a[0].localeCompare(b[0])).forEach(x=> {
        console.log(`${x[0]} -> ${Object.entries(x[1]).sort((a , b) => a[1] - b[1]).join(" ").split(",").join(" -> ")}`);
    })
}
solve([
'Bulgaria > Sofia > 500',
'Bulgaria > Sopot > 800',
'France > Paris > 2000',
'Albania > Tirana > 1000',
'Bulgaria > Sofia > 200'
]
)