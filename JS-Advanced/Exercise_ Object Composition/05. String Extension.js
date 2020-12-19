(function solve() {
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)) {
            return str + this
        }

        return this.toString()
    }
    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)) {
            return this + str
        }

        return this.toString()
    }
    String.prototype.isEmpty = function () {
        if(this.length===0) {
            return true
        }
        return false
    }
    String.prototype.truncate = function (num) {
        if(num <=3) return ".".repeat(num)
        if(num >= this.length) return this.toString()
        let spaceIndex=this.substring(0 , num - 1).lastIndexOf(" ")
        if(spaceIndex >= 0) return this.substring(0 , spaceIndex) + "..."
        return this.substring(0 , num - 3) + "..."
    }
    String.format = function (str , ...params) {
        params.forEach((el , i) => {
            str= str.replace(`{${i}}` , el)
        })
        return str
    }
})()
