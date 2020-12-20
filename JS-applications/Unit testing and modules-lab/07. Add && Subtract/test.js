const createCalculator = require("./app")
let { assert } = require("chai")

describe("function calc", () => {
    let fn;
    beforeEach(() => {
        fn = createCalculator()
    })
    describe("function should return object with 3 functions", () => {
        it("fn should be an instance of Object", () => {
            assert.equal(fn instanceof Object, true)
        })
        it("function should have property add that is a function", () => {
            assert.equal(fn.hasOwnProperty("add"), true)
        })
        it("function should have property subtract that is a function", () => {
            assert.equal(fn.hasOwnProperty("subtract"), true)
        })
        it("function should have property get that is a function", () => {
            assert.equal(fn.hasOwnProperty("get"), true)
        })
    })
    describe("all functions from the object should work properly", () => {
        it("function add should add to the value 5 and make it 5", () => {
            fn.add(5)
            let value = fn.get()
            assert.equal(value, 5)
        })
        it("function subtract should subtract from the value 5 and make it -5", () => {
            fn.subtract(5)
            let value = fn.get()
            assert.equal(value, -5)
        })
        it("function get should return our value", () => {
            assert.equal(fn.get(), 0)
        })
        it("function should work with strings that can be converted to Number", () => {

            fn.subtract("-3.5")

            fn.add("6.5")

            assert.equal(fn.get(), 10)
        })
    })

})