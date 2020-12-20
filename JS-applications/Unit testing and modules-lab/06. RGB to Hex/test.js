const rgbToHexColor=require("./app")
let { assert }=require("chai")


describe("function rgbToHex", ()=> {
    it("function should return undefined if any of the rgbs we passed is not interegers" , () => {
        assert.equal(rgbToHexColor("gosho", 1, 2), undefined)
    })
    it("function should return undefined if any of the rgbs we passed is less than 0" , () => {
        assert.equal(rgbToHexColor(-1, 1, 2), undefined)
    })
    it("function should return undefined if any of the rgbs we passed is bigger than 255", () => {
        assert.equal(rgbToHexColor(266, 1, 2), undefined)
    })
    it("function should return the hex values of all the colors we passed", () => {
        assert.equal(rgbToHexColor(244,150, 100), "#F49664")
    })
})