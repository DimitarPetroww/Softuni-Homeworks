class Stringer {
    constructor(string , length) {
        this.innerString=string
        this.innerLength=length
    }


    increase(length) {
        this.innerLength+=length
    }
    decrease(length) {
        if(this.innerLength-length < 0) {
            this.innerLength=0
        }else {
            this.innerLength-=length
        }
    }
    toString() {
        if(this.innerLength===0) {
            return "..."
        }
        return this.innerString.slice(0,this.innerLength) + (this.innerLength >= this.innerString.length ? "" : "...")
    }
}
