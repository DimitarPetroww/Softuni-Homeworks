function solve(arr , sortCriteria) {
    class Ticket {
        constructor(destination , price , status) {
            this.destination=destination
            this.price=Number(price)
            this.status=status
        }
    }
    return arr.map(x=> x.split("|"))
    .reduce((a, [x, y, z]) => {
        a.push(new Ticket(x, y, z))
        return a
    }).sort((a,b) => sortCriteria==="price" ? a.price-b.price : a[sortCriteria].localeCompare(b[sortCriteria]))
}
