function solve() {
    return {
        size: 0,
        list: [],
        add: function (el) {
            this.list.push(el)
            this.size++
            return this.list.sort((a, b) => a - b)
        },
        remove: function (i) {
            if (i >= 0 && i < this.list.length) {
                this.list.splice(i, 1)
                this.size--
                return this.list
            }
        },
        get: function (i) {
            if (i >= 0 && i < this.list.length) {
                return this.list[i]
            }

        }
    }
}
