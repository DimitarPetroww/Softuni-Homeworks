function Spy(target, method) {
    let result = {
        count: 0
    }
    let original = target[method]
    target[method] = function () {
        result.count++
        return original.call(this,...arguments)
    }
    return result
}



let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }
