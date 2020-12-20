const isOddOrEven = require("./app")
let { assert } = require("chai")

describe("evenOrOdd", ()=> {
    it("function should return undefined if the param we passed is not a string", () => {
        assert.equal(isOddOrEven(1), undefined)
    })
    it("function should return even if we pass an argument with even length", () => {
        assert.equal(isOddOrEven("word"), "even")
    })
    it("function should return odd if we pass an argument with odd length", () => {
        assert.equal(isOddOrEven("pesho"), "odd")
    })
})