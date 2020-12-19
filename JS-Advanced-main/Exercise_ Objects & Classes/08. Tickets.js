function solve(arr , sortCriteria) {
    class Ticket {
        constructor(destination , price , status) {
            Object.assign(this , {destination , price , status})
        }
    }
    let result=[]
    arr.forEach(x=> {
        let [destination , price , status]=x.split("|")
        result.push(new Ticket(destination , price , status))
    })
    console.log(result.sort((a,b) => sortCriteria==="price" ? a.price-b.price : a[sortCriteria].localeCompare(b[sortCriteria])));
    return result.sort((a,b) => sortCriteria==="price" ? a.price-b.price : a[sortCriteria].localeCompare(b[sortCriteria]))

}
