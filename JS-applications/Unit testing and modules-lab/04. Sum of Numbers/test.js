const sum=require("./app")
let { assert }=require("chai")


describe("function sum", ()=> {
    it("should throw an exception if we pass something different from array" , () => {
        assert.throw(() => sum(5), "arr is not iterable")
    })
    it("function should return NaN if we pass an array that contains something different from numbers" , () => {
        assert.equal(isNaN(sum([{}, {}, {}])), true)
    })
    it("should return the sum of the elements in the array that we passed as an argument", () => {
        assert.equal(sum([1, 1, 1]), 3)
    })
})