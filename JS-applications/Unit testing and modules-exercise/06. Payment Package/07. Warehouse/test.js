const Warehouse = require("./app")
let { assert, expect } = require("chai")

describe("Warehouse", () => {
    let warehouse;
    beforeEach(() => {
        warehouse = new Warehouse(50)
    })
    describe("does it have all properties and is it class", () => {
        it("is it class", () => {
            assert.equal(warehouse instanceof Warehouse, true)
        })
        it("does it have property: capcity", () => {
            expect(warehouse).to.have.property("capacity", 50)
        })
        it("does it have property: availableProducts", () => {
            expect(warehouse).to.have.property("availableProducts")
        })
        it("does it have method: addProduct(type, product, quantity)", () => {
            expect(warehouse).to.respondTo("addProduct")
        })
        it("does it have method: orderProducts(type)", () => {
            expect(warehouse).to.respondTo("orderProducts")
        })
        it("does it have method: occupiedCapacity()", () => {
            expect(warehouse).to.respondTo("occupiedCapacity")
        })
        it("does it have method: revision()", () => {
            expect(warehouse).to.respondTo("revision")
        })
        it("does it have method: scrapeAProduct(product, quantity)", () => {
            expect(warehouse).to.respondTo("scrapeAProduct")
        })

    })
    describe("constructor(capacity)", () => {
        it("capacity getter should return our capacity correctly", () => {
            assert.equal(warehouse.capacity, 50)
        })
        it("capacity setter should set our capacity with new value if we pass correct argument", () => {
            let test = new Warehouse(60)
            assert.equal(test.capacity, 60)
        })
        it("capacity setter should not set our capacity with new value if we pass incorrect argument", () => {
            assert.throws(() => {
                new Warehouse("string")
            }, "Invalid given warehouse space")
            assert.throws(() => {
                new Warehouse(-3)
            }, "Invalid given warehouse space")
        })
    })
    describe("addProduct(type, product, quantity)", () => {
        it("if added quantity is bigger or equal to 0", () => {
            assert.equal(JSON.stringify(warehouse.addProduct("Food", "gosho", 2)), '{"gosho":2}')
        })
        it("if added quantity is bigger or equal to 0 but we already have the product", () => {
            warehouse.addProduct("Food", "gosho", 2)
            assert.equal(JSON.stringify(warehouse.addProduct("Food", "gosho", 2)), '{"gosho":4}')
        })
        it("if we pass incorrect argument", () => {
            assert.throws(() => {
                warehouse.addProduct("Drink", "pesho", 70)
            }, `There is not enough space or the warehouse is already full`)
        })
    })
    describe("orderProducts(type)", () => {
        it("should return our products sorten by descending order", () => {
            warehouse.addProduct("Food", "gosho", 7)
            warehouse.addProduct("Food", "pesho", 9)
            assert.equal(JSON.stringify(warehouse.orderProducts("Food")), '{"pesho":9,"gosho":7}')
            warehouse.addProduct("Drink", "something", 10)
            warehouse.addProduct("Drink", "no idea", 11)
            assert.equal(JSON.stringify(warehouse.orderProducts("Drink")), '{"no idea":11,"something":10}')
        })
    })
    describe("occupiedCapacity()", () => {
        it("should return a number that represents our already occupied places", () => {
            warehouse.addProduct("Food", "gosho", 7)
            warehouse.addProduct("Food", "pesho", 9)
            warehouse.addProduct("Drink", "something", 10)
            warehouse.addProduct("Drink", "no idea", 11)

            assert.equal(warehouse.occupiedCapacity(), 37)
        })
        it("should return 0 if we dont have products", () => {
            assert.equal(warehouse.occupiedCapacity(), 0)
        })
    })
    describe("revision()", () => {
        it("should print our product when we have ones", () => {
            warehouse.addProduct("Food", "gosho", 7)
            warehouse.addProduct("Food", "pesho", 9)
            warehouse.addProduct("Drink", "something", 10)
            warehouse.addProduct("Drink", "no idea", 11)

            assert.equal(warehouse.revision(), "Product type - [Food]\n- gosho 7\n- pesho 9\nProduct type - [Drink]\n- something 10\n- no idea 11")
        })
        it("should print that our warehouse is empty if we dont have products", () => {
            assert.equal(warehouse.revision(), "The warehouse is empty")
        })
    })
    describe("scrapeAProduct(product, quantity)", () => {

        it("when we pass product that is in the warehouse", () => {
            warehouse.addProduct("Drink", "no idea", 11)
            assert.equal(JSON.stringify(warehouse.scrapeAProduct("no idea", 1)), '{"no idea":10}')
        })
        it("when we pass correct product but bigger quantity than the product that already has", () => {
            warehouse.addProduct("Drink", "no idea", 11)
            assert.equal(JSON.stringify(warehouse.scrapeAProduct("no idea", 300)), '{"no idea":0}')
        })
        it("when we pass incorrect product", () => {
            warehouse.addProduct("Drink", "no idea", 11)
            assert.throws(() => {
                warehouse.scrapeAProduct("1Nc0rrect Pr00duCT", 300)
            }, `1Nc0rrect Pr00duCT do not exists`)
        })
    })
})