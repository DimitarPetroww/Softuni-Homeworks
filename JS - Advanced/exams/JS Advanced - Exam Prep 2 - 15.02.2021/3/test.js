let dealership = require("./solution.js");
let assert = require("chai").assert;
describe("MyTests", () => {
    describe("newCarCost(oldCarModel, newCarPrice)", () => {
        it("should return our price new price if the car is not old", () => {
            assert.equal(dealership.newCarCost("test", 2000), 2000)
        })
        it("should return correct prices if we pass old car as an argument", () => {
            assert.equal(dealership.newCarCost("Audi A4 B8", 30000), 15000)
            assert.equal(dealership.newCarCost("Audi A6 4K", 30000), 10000)
            assert.equal(dealership.newCarCost("Audi A8 D5", 30000), 5000)
            assert.equal(dealership.newCarCost("Audi TT 8J", 30000), 16000)
        })
    })
    describe("carEquipment(extrasArr, indexArr)", () => {
        it("should return our extras", () => {
            assert.deepEqual(dealership.carEquipment(["heated seats", "sliding roof", "sport rims", "navigation"], [0, 3, 2]), ["heated seats", "navigation", "sport rims"])
            assert.deepEqual(dealership.carEquipment(["heated seats", "sliding roof", "sport rims", "navigation"], [0, 1, 2]), ["heated seats", "sliding roof", "sport rims"])
        })
    })
    describe("euroCategory(category)", () => {
        it("should return a message if we pass category that is bigger than 4", () => {
            assert.equal(dealership.euroCategory(4), "We have added 5% discount to the final price: 14250.")
            assert.equal(dealership.euroCategory(6), "We have added 5% discount to the final price: 14250.")
        })
        it("should return a response that our category should be bigger than 4", () => {
            assert.equal(dealership.euroCategory(2), "Your euro category is low, so there is no discount from the final price!")
        })
    })
})
