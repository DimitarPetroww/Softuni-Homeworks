const rgbToHexColor = require("./app")
let { assert } = require("chai")

describe("RGB checker", function () {
    it("valid", () => {
        assert.equal(rgbToHexColor(25, 125, 255), "#197DFF")
    })

    it("invalid", () => {
        assert.equal(rgbToHexColor(80, 220, 150.5), undefined)
    })

    it("invalid", () => {
        assert.equal(rgbToHexColor(80, 220, 280), undefined)
    })

    it("invalid", () => {
        assert.equal(rgbToHexColor(80, '220', 175), undefined)
    })

    it("invalid", () => {
        assert.equal(rgbToHexColor(-80, 220, 160), undefined)
    })

    it("valid", () => {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000")
    })
})