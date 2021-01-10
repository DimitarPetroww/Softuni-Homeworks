(function () {
    let sum = 0

    return function add(num) {
        sum += Number(num)
        add.toString = () => sum
        return add
    }
})()