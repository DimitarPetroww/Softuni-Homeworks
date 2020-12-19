const calc = require("./app")
let { assert } = require("chai")

describe("function calc", ()=> {
    let fn;
    beforeEach(() => {
        fn=calc()
    })
    describe("function should return object with 3 functions", () => {
        it("function should have property add that is a function" , ()=> {
            assert.equal(fn.hasOwnProperty("add"),true)
        })
        it("function should have property subtract that is a function" , ()=> {
            assert.equal(fn.hasOwnProperty("subtract"),true)
        })
        it("function should have property get that is a function" , ()=> {
            assert.equal(fn.hasOwnProperty("get"),true)
        })
    })
    describe("all functions from the object should work properly", () => {
        it("function add should add to the value 5 and make it 5" , ()=> {
            fn.add(5)
            let value=fn.get()
            assert.equal(value, 5)
        })
        it("function subtract should subtract from the value 5 and make it -5", () => {
            fn.subtract(5)
            let value=fn.get()
            assert.equal(value, -5)
        })
        it("function get should return our value", () => {
            assert.equal(fn.get(), 0)
        })
    })

})