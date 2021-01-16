function solve(arr1 ,arr2) {
    let result=stock(arr1 , {})
    let finalResult=stock(arr2 , result)
    for(let key in finalResult) {
        console.log(`${key} -> ${finalResult[key]}`);
    }
    function stock(arr , obj) {
        for(let i=0;i<arr.length;i+=2) {
            let stock=arr[i]
            let quantity=Number(arr[i+1])
            if(!obj.hasOwnProperty(stock)) {
                obj[stock]=quantity
            }else {
                obj[stock]+=quantity
            }
        }
        return obj
    }
}
