function arrayMap(array,func) {
    return array.reduce( (a,x) => {
        a.push(func(x))
        return a   
    },[] )
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
