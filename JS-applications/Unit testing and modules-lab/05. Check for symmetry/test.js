const isSymmetric = require("./app")
let { assert } = require("chai")


describe("function isSymmetric", ()=> {
    it("function should return false if we pass something different from array as an argument" , () => {
        assert.equal(isSymmetric(5), false)
    })
    it("function should return false if the array is not symmetric" , () => {
        assert.equal(isSymmetric([1, 2, 3, 4, 5]), false)
    })
    it("function should return true if the array is symmetric", () => {
        assert.equal(isSymmetric([1, 1, 1]), true)
    })
})