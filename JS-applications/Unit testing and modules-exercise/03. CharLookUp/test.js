const lookupChar = require("./app")
let { assert } = require("chai")

describe("lookupChar", ()=> {
    it("function should return undefined if we pass something different from string as first argument" , () => {
        assert.equal(lookupChar(5, 2), undefined)
    })
    it("function should return undefined if we pass something different from number as second argument" , () => {
        assert.equal(lookupChar("string", "index"), undefined)
    })
    it("function should return undefined if we pass float index as second argument" , () => {
        assert.equal(lookupChar("string", 3.12), undefined)
    })
    it("function should return Incorrect index if we pass negative index", () => {
        assert.equal(lookupChar("string" , -3), "Incorrect index")
    })
    it("function should return Incorrect index if we pass index out of bounds", () => {
        assert.equal(lookupChar("string" , 100), "Incorrect index")
    })
    it("function should return correct answer if we pass correct parameters", () => {
        assert.equal(lookupChar("string" , 3), "i")
    })
})