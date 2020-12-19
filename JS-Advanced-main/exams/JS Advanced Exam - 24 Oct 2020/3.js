class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber) {
        if (this.capacity === this.vehicles.length) {
            throw new Error("Not enough parking space.")
        }
        this.vehicles.push({ carModel, carNumber, payed: false })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNum) {
        let found = this.vehicles.find(x => x.carNumber === carNum)
        if (!found) {
            throw new Error("The car, you're looking for, is not found.")
        }
        else if (!found.payed) {
            throw new Error(`${found.carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(this.vehicles.indexOf(found), 1)
        return `${found.carNumber} left the parking lot.`
    }
    pay(carNum) {
        let found = this.vehicles.find(x => x.carNumber === carNum)
        if (!found) {
            throw new Error(`${carNum} is not in the parking lot.`)
        }
         if (found.payed===true) {
            throw new Error(`${carNum}'s driver has already payed his ticket.`)
        }
        found.payed = true
        return `${carNum}'s driver successfully payed for his stay.`
    }
    getStatistics(carNum) {
        if (!carNum) {
           return [
            `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`
            ,`${this.vehicles.sort((a , b)=> a.carModel.localeCompare(b.carModel))
                .map(({carModel , carNumber , payed})=>
                 `${carModel} == ${carNumber} - ${payed ? "Has payed" : "Not payed"}`)
                 .join("\n")}`
           ].join("\n")
        }else {
            const found=this.vehicles.find((c)=> c.carNumber===carNum)
            return `${found.carModel} == ${found.carNumber} - ${found.payed ? "Has payed" : "Not payed"}`
        }

    }
}
