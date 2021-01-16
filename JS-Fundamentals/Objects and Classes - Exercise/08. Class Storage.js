class Storage {
    constructor(capacity) {
        this.capacity=capacity
        this.storage=[]
        this.totalCost=0
   }
    addProduct(product) {
        this.storage.push(product)
        this.capacity-=product.quantity
        this.totalCost+=product.price * product.quantity
    }
    getProducts() {
        let result=[]
        for(let currentProduct of this.storage) {
            result.push(JSON.stringify(currentProduct));
        }
        return result.join("\n");
    }
}
