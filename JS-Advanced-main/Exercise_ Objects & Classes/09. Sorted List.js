class List {
    constructor() {
        this.list=[]
        this.size=0
    }
    add(el) {
        this.list.push(el)
        this.size++
    }
    remove(index) {
        if(this.validateIndex(index)) {
            this.list.splice(index,1)
            this.size--
        }
    }
    get(index) {
        if(this.validateIndex(index)) {
            return this.list[index]
        }
    }
    validateIndex(index) {
        if(index >=0 && index <this.list.length) {
            return true
        }
        return false
    }
}
