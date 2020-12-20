const mathEnforcer = require("./app")
let { assert } = require("chai")

describe("mathEnforcer", ()=> {
    describe("addFive", () => {
        it("function addFive should return undefined if we pass argument that is different from Number", () => {
            assert.equal(mathEnforcer.addFive("string"), undefined)
        })
        it("function addFive should work properly if we pass Number", () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        })
        it("function addFive should work properly if we pass negative number", () => {
            assert.equal(mathEnforcer.addFive(-3), 2)
        })
        it("function addFive should return result that is closeTo to the actual one if we pass float number", () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.1)
        })
        
    })
    describe("subtractTen", () => {
        it("function subtractTen should return undefined if we pass argument that is different from Number", () => {
            assert.equal(mathEnforcer.subtractTen("string"), undefined)
        })
        it("function subtractTen should work properly if we pass Number", () => {
            assert.equal(mathEnforcer.subtractTen(15), 5)
        })
        it("function subtractTen should work properly if we pass negative number", () => {
            assert.equal(mathEnforcer.subtractTen(-3), -13)
        })
        it("function subtractTen should return result that is closeTo to the actual one if we pass float number", () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.1)
        })
    })
    describe("sum", () => {
        it("function sum should return undefined if we pass the first argument as something different from Number", () => {
            assert.equal(mathEnforcer.sum("string", 5), undefined)
        })
        it("function sum should return undefined if we pass the first argument as something different from Number", () => {
            assert.equal(mathEnforcer.sum(5, "string"), undefined)
        })
        it("function sum should work properly if we pass correct numbers", () => {
            assert.equal(mathEnforcer.sum(5, 5), 10)
        })
        it("function sum should work properly if we pass correct numbers", () => {
            assert.equal(mathEnforcer.sum(-5, -5), -10)
        })
        it("function sum should return result that is closeTo to the actual one if we pass float numbers", () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.1)
        })
        it("function sum should return result that is closeTo to the actual one if we pass float numbers", () => {
            expect(mathEnforcer.sum(0.1, 3)).to.be.closeTo(3.1, 0.1)
        })
    })
})