function solve(arr) {
    arr=arr.slice(0 , arr.length - 1).join(" ")
    let price=0
    let boughten=[]
    let pattern= />>(?<product>[a-zA-Z]+)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/g
    while((valid=pattern.exec(arr)) !== null ) {
        let product=valid.groups.product
        let priceForEach=Number(valid.groups.price)
        let quantity=Number(valid.groups.quantity)
        price+=priceForEach * quantity
        boughten.push(product)
    }
    console.log(`Bought furniture: `);
    for (const name of boughten) {
        console.log(name);
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);
}
