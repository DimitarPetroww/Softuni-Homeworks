function solve(arr) {
    let parkedCars=new Set()
    for (const car of arr) {
        let [command , number]=car.split(", ")
        if(command==="IN" && !parkedCars.has(number)) {
            parkedCars.add(number)
        }else if(command==="OUT" && parkedCars.has(number)) {
            parkedCars.delete(number)
        }
    }
    if(Array.from(parkedCars).length===0) {
        console.log("Parking Lot is Empty");
    }else {
        console.log(Array.from(parkedCars).sort().join("\n"));
    }
}
