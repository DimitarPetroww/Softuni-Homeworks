class Hex {
    constructor(value) {
        this.num=value
    }
    valueOf() {
        return this.num
    } 
    toString() {
        return "0x" + (this.num.toString(16).toUpperCase())
    }
    plus(operand) {
        return new Hex(this.num + operand)
    }
    minus(operand) {
        return new Hex(this.num - operand)
    }
    parse(string) {
        return parseInt(string , 16)
    }
}
