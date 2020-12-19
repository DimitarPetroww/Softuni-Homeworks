function solve(arr) {
    let result=arr.reduce((a , c)=> {
        let [car , model , price]=c.split(" | ")
        price=Number(price)
        if(a.has(car)) {
            if(a.get(car).has(model)) {
                let oldValue=a.get(car).get(model)
                oldValue+=price
                let idk=a.get(car).set(model , oldValue)
                a.set(car , idk)
            }else {
                let idk=a.get(car).set(model , price)
                a.set(car , idk)
            }
        }else {
            let idk=new Map()
            idk.set(model , price)
            a.set(car , idk)
        }
        return a
    }, new Map())
    Array.from(result.entries()).forEach(x=> {
        console.log(x[0]);
        Array.from(x[1].entries()).forEach(y=> {
            console.log(`###${y[0]} -> ${y[1]}`);
        })
    });
}
