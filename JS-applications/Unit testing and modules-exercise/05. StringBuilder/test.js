const StringBuilder = require("./app")
let { assert, expect } = require("chai")

describe("StringBuilder", () => {
    describe("isItClass", () => {
        it("is our StringBuilder a class", () => {
            let str=new StringBuilder()
            assert.equal(str instanceof StringBuilder, true)
        })
    })
    describe("does it have all properties", () => {
        it("does it have method called _verifyParam", () => {
            assert.equal(StringBuilder.hasOwnProperty("_vrfyParam"), true)
        })
        it("does it have method called append", () => {
            let str=new StringBuilder()
            assert.equal(str.__proto__.hasOwnProperty("append"), true)
        })
        it("does it have method called prepend", ()=> {
            let str=new StringBuilder()
            assert.equal(str.__proto__.hasOwnProperty("append"), true)
        })
        it("does it have method called toString", ()=> {
            let str=new StringBuilder()
            assert.equal(str.__proto__.hasOwnProperty("toString"), true)
        })
        it("does it have method called insertAt", ()=> {
            let str=new StringBuilder()
            assert.equal(str.__proto__.hasOwnProperty("insertAt"), true)
        })
        it("does it have method called remove", ()=> {
            let str=new StringBuilder()
            assert.equal(str.__proto__.hasOwnProperty("remove"), true)
        })
    })
    describe("constructor", () => {
        it("the object should be able to be instantiated without param", () => {
            assert.equal(new StringBuilder().toString(), "")
        })
        it("the object should be able to be instantiated with param", () => {
            assert.equal(new StringBuilder("gosho").toString(), "gosho")
        })
    })
    describe("verify", () => {
        it("verify function should throw exception if we try to pass argument that is not a string", () => {
            assert.throws(() => {
                return new StringBuilder(5)
            }, 'Argument must be а string')
        })
    })
    describe("append", () => {
        it("function append should convert the passed string into an array and push it at the end of storage", () => {
            let obj = new StringBuilder("pesho")
            obj.append("gosho")
            assert.equal(obj.toString(), "peshogosho")
        })
    })
    describe("prepend", () => {
        it("function prepend should convert the passed string into an array and insert it at the start of the storage", () => {
            let obj = new StringBuilder("pesho")
            obj.prepend("gosho")
            assert.equal(obj.toString(), "goshopesho")
        })
    })
    describe("insertAt", () => {
        it("function insertAt should insert the passed string converted to an array on the given index", () => {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            assert.equal(str.toString(), "User,woop hello, there")
        })
    })
    describe("remove", () => {
        it("function remove should remove all elements from the start index till the length given", () => {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            str.remove(6, 3);
            assert.equal(str.toString(), "User,w hello, there")
        })
    })
    describe("toString", () => {
        it("function toString should return our storage converted to string", () => {
            let obj=new StringBuilder("pesho")
            let result=obj.toString()
            assert.equal(result, "pesho")
        })
    })
})