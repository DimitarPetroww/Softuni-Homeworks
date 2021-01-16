function solve(arr) {
    for(let current of arr) {
        let [city , latitude , longitude]=current.split(" | ")
        latitude=Number(latitude)
        longitude=Number(longitude)
        let result = {
            town : city,
            latitude : latitude.toFixed(2),
            longitude : longitude.toFixed(2)
        }
        console.log(result);
    }
}
