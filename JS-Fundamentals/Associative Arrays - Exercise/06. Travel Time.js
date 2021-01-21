function solve(arr) {
    Object.entries(arr.map(x=> x.split(" > ")).reduce((a, [country , town , price]) => {
        if (a[country]) {
            a[country][town] = !a[country][town] ? Number(price) : Math.min(a[country][town], price)
        } else {
            a[country] = { [town]: Number(price) }
        }
        return a
    }, {})).sort((a, b) => a[0].localeCompare(b[0])).forEach(x => {
        console.log(`${x[0]} -> ${Object.entries(x[1]).sort((a, b) => a[1] - b[1]).map(x => x.join(" -> ")).join(" ")}`);
    })
}
