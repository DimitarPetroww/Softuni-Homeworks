function solve(arr) {
    let speed=arr[0]
    let area=arr[1]
    const limits= {
        residential:x=> x-20,
        city:x=> x-50,
        interstate: x=> x-90,
        motorway:x=> x-130
    }
    let diff=limits[area](speed)
    if(diff > 0) {
        if(diff <=20) {
            console.log("speeding");
        }else if(diff <=40) {
            console.log("excessive speeding");
        }else {
            console.log("reckless driving");
        }
    } 
}
