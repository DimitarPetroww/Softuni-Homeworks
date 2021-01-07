function cat(arr) {
    let array=[]
    class Cat {
        constructor(name , age) {
            this.name=name
            this.age=age
        }
    }
    for(let i=0;i<arr.length;i++) {
        let [catName , age]=arr[i].split(" ")
        array.push(new Cat(catName , age))
    }
    function Meow(cats) {
        for(let cat of cats) {
            console.log(`${cat.name}, age ${cat.age} says Meow`);
        }
    }
    Meow(array)
}
