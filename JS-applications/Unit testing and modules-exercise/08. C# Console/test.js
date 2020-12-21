const Console = require("./app")
let { assert, expect } = require("chai")

describe("c# console", () => {
    describe("c# console", () => {
        it("writeLine(string)", () => {
            assert.equal(Console.writeLine("gosho"), "gosho")
        })
        it("writeLine(object)", () => {
            assert.equal(Console.writeLine({ property: "value" }), '{"property":"value"}')
        })
        it("writeLine(!string, parameters)", () => {
            assert.throws(() => {
                Console.writeLine({}, 1)
            }, "No string format given!")
        })
        it("writeLine()", () => {
            assert.throw(() => {
                Console.writeLine()
            }, "No string format given!")
        })
        it("writeline('{1}{2}{3}', 1 , 2)", () => {
            assert.throw(() => {
                Console.writeLine("{1}{2}{3}", "1", "2")
            }, "Incorrect amount of parameters given!")
        })
        it("writeline('{0}{1}', 1 , 2)", () => {
            assert.equal(Console.writeLine("{0}{1}", "1", "2"), "12")
        })
        it("writeline('{0}{24}', 1 , 2)", () => {
            assert.throw(() => {
                Console.writeLine("{0}{24}", "1", "2")
            }, "Incorrect placeholders given!")
        })
    })
})