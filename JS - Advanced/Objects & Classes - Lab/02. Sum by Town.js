function foo(data) {
    return JSON.stringify(
            data.reduce( (a,b,i) => {
            if(i % 2 === 0){
                a.hasOwnProperty(b) ? a[b] += Number(data[i + 1]) : a[b] = Number(data[i + 1])
            }
            return a
            },{}) 
        )
}

console.log(foo(['Sofia','20','Varna','3','Sofia','5','Varna','4']))