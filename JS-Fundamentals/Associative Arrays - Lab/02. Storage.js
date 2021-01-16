function solve(arr) {
    let storage=new Map()
    for (const currentProduct of arr) {
        let [product , quantity]=currentProduct.split(" ")
        if(storage.has(product)) {
            storage.set(product , Number(storage.get(product)) + Number(quantity))
        }else {
            storage.set(product , quantity)
        }
    }
    for (const [key , value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}
