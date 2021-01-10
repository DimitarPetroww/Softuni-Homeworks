function Spy(obj , target) {
    let result={
        count : 0
    }
    let idk=obj[target]
    obj[target]=function() {
        result.count++
        return idk.apply(this , arguments)
    }

    return result
}