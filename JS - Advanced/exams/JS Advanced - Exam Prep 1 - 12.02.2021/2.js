class Parking {
    constructor(capacity) {
        Object.assign(this, {capacity, vehicles: []})
    }
    addCar(carModel, carNumber) {
        if(this.vehicles.length >= this.capacity) {
            this.throwError("Not enough parking space.")
        }
        this.vehicles.push({carModel, carNumber, payed: false})
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        const found = this.getCar(carNumber)
        if(!found) {
            this.throwError("The car, you're looking for, is not found.")
        }
        if(!found.payed) {
            this.throwError(`${found.carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(this.vehicles.indexOf(found), 1)
        return `${found.carNumber} left the parking lot.`
    }
    pay(carNumber) {
        const found = this.getCar(carNumber)
        if(!found) {
            this.throwError(`${carNumber} is not in the parking lot.`)
        }
        if(found.payed) {
            this.throwError(`${carNumber}'s driver has already payed his ticket.`)
        }
        found.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`

    }
    getStatistics(carNumber) {
        if(!carNumber) {
            return [
                `The Parking Lot has ${ this.capacity - this.vehicles.length } empty spots left.`,
                this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .map(({carNumber, carModel, payed}) => `${carModel} == ${carNumber} - ${payed ? "Has payed" : "Not payed"}`)
                .join("\n")
            ].join("\n")
        }
        const car = this.getCar(carNumber)
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`
    }
    getCar(carNumber) {
        return this.vehicles.find(x=> x.carNumber === carNumber)
    }
    throwError(message) {
        throw new Error(message)
    }
}
