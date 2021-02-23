let pizzUni = require("./solution.js");
let assert = require("chai").assert;
describe("MyTests", () => {
    describe("makeAnOrder(obj)", () => {
        it("should throw an Error if we dont pass an ordered pizza", () => {
            assert.throw(() => pizzUni.makeAnOrder({ bez_pica: ": )" }), Error, "You must order at least 1 Pizza to finish the order.")
            assert.throw(() => pizzUni.makeAnOrder({}), Error, "You must order at least 1 Pizza to finish the order.")
        })
        it("should return a message without saying we bought ordered drink if dont pass the drink", () => {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: "asd" }), `You just ordered asd`)
        })
        it("should return a message with saying we bought ordered drink if  pass the drink", () => {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: "asd", orderedDrink: "dasd" }), `You just ordered asd and dasd.`)
        })
    })
    describe("getRemainingWork(statusArr)", () => {
        it("should return a message that we dont have work left", () => {
            assert.equal(pizzUni.getRemainingWork([{ status: "ready" }, { status: "ready" }]), "All orders are complete!")
        })
        it("should return message that tells us our remaining work", () => {
            assert.equal(pizzUni.getRemainingWork([{ status: "not ready", pizzaName: "nz" }, { status: "ready" }]), "The following pizzas are still preparing: nz.")
            assert.equal(pizzUni.getRemainingWork([{ status: "not ready", pizzaName: "nz" }, { status: "not ready", pizzaName: "ddz" }]), "The following pizzas are still preparing: nz, ddz.")
        })
    })
    describe("orderType(totalSum, typeOfOrder)", () => {
        it("should return a sum that has a discount if our type of order is carry out", () => {
            assert.equal(pizzUni.orderType(200, "Carry Out"), 180)
        })
        it("should return a sum that does not have a discount if our type of order is delivery", () => {
            assert.equal(pizzUni.orderType(200, "Delivery"), 200)
        })
        it("should return undefined if our type of order is different from delivery or carry out", () => {
            assert.equal(pizzUni.orderType(200, "asd"), undefined)
        })
    })
})
