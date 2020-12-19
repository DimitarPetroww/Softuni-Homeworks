function solve(arr) {
    let bottles={}
    let bottlesMade={}
    arr.forEach(x=> {
        let [type , quantity]=x.split(" => ")
        if(bottles[type]) {
           bottles[type]+=Number(quantity)
        }else {
            bottles[type]=Number(quantity)
        }
        if(bottles[type] >= 1000) {
            if(bottlesMade[type]) {
                bottlesMade[type]+=parseInt(bottles[type]/1000)
            }else {
                bottlesMade[type]=parseInt(bottles[type]/1000)
            }
            bottles[type]=bottles[type] % 1000
        }
    })
    Object.entries(bottlesMade).forEach(([key , value])=> {
        console.log(`${key} => ${value}`);
    })

}
