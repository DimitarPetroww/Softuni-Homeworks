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
let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }
