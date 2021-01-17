function solve(arr) {
    Object.entries(arr.reduce((a , b)=> {
        let [person , phone]=b.split(" ")
        a[person]=phone
        return a
    } , {})).forEach(([key , value])=> console.log(`${key} -> ${value}`))

}
