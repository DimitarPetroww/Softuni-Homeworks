function solve(arr) {
    let obj={}
    for(let i=0;i<arr.length;i+=2) {
        let ore=arr[i]
        let quantity=Number(arr[i+1])
        if(obj.hasOwnProperty(ore)) {
            obj[ore]+=quantity
        }else {
            obj[ore]=quantity
        }
    }
    let entries=Object.entries(obj)
    for (const [ore , quantity] of entries) {
        console.log(`${ore} -> ${quantity}`);
    }
}
