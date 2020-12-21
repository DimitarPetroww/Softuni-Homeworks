describe("PaymentPackage", () => {
    let obj;
    beforeEach(() => {
        obj = new PaymentPackage("gosho", 20)
    })
    describe("does the class have all properties", () => {
        it("should have all necessary props", () => {
            assert.equal(obj.name !== undefined, true)
            assert.equal(obj.value !== undefined, true)
            assert.equal(obj.VAT !== undefined, true)
            assert.equal(obj.active !== undefined, true)
            assert.equal(obj.toString !== undefined, true)
        });
    });
    describe("constructor", () => {
        it("Can be instantiated with two parameters", () => {
            assert.equal(obj.name, "gosho")
            assert.equal(obj.value, 20)
        })
        it("default values of VAT and active should be correct", () => {
            assert.equal(obj.VAT, 20)
            assert.equal(obj.active, true)
        })
    })
    describe("name accessors", () => {
        it("name getter", () => {
            assert.equal(obj.name, "gosho")
        })
        describe("name setter", () => {
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.name = 5
                }, 'Name must be a non-empty string')
            })
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.name = ""
                }, 'Name must be a non-empty string')
            })
            it("should set new value on our name", () => {
                obj.name = "pesho"
                assert.equal(obj.name, "pesho")
            })
        })
    })
    describe("value accessors", () => {
        it("value getter", () => {
            assert.equal(obj.value, 20)
        })
        describe("value setter", () => {
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.value = "kkkk"
                }, 'Value must be a non-negative number')
            })
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.value = -100
                }, 'Value must be a non-negative number')
            })
            it("should set new value on our value", () => {
                obj.value = 10
                assert.equal(obj.value, 10)
            })
        })
    })
    describe("VAT accessors", () => {
        it("VAT getter", () => {
            assert.equal(obj.VAT, 20)
        })
        describe("VAT setter", () => {
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.VAT = "kkkk"
                }, 'VAT must be a non-negative number')
            })
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.VAT = "20"
                }, 'VAT must be a non-negative number')
            })
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.VAT = -100
                }, 'VAT must be a non-negative number')
            })
            it("should set new value on our VAT", () => {
                obj.VAT = 10
                assert.equal(obj.VAT, 10)
            })
        })
    })
    describe("active accessors", () => {
        it("active getter", () => {
            assert.equal(obj.active, true)
        })
        describe("active setter", () => {
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.active = "kkkk"
                }, 'Active status must be a boolean')
            })
            it("should throw an exception", () => {
                assert.throws(() => {
                    obj.active = -100
                }, 'Active status must be a boolean')
            })
            it("should set new value on our active property", () => {
                obj.active = false
                assert.equal(obj.active, false)
            })
        })
    })
    describe("toString", () => {
        it("return correct asnwer with default values", () => {
            assert.equal(obj.toString(), [
                `Package: gosho`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 20%): 24`
            ].join("\n"))
        })
        it("return correct asnwer with changed values", () => {
            obj.name = "HR services"
            obj.value = 30
            obj.VAT = 50
            obj.active = false
            assert.equal(obj.toString(), [
                `Package: HR services (inactive)`,
                `- Value (excl. VAT): 30`,
                `- Value (VAT 50%): 45`
            ].join("\n"))
        })
    })
})