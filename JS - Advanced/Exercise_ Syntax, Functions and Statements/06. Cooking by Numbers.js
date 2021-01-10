function solve(...arr) {
    let num=Number(arr.shift())
    for(let i=0;i<arr.length;i++) {
        let operation=arr[i]
        if(operation==="chop") {
            num=num/2
            console.log(num);
        }else if(operation==="dice") {
            num=Math.sqrt(num)
            console.log(num);
        }else if(operation==="spice") {
            num+=1
            console.log(num);
        }else if(operation==="bake") {
            num*=3
            console.log(num);
        }else if(operation==="fillet") {
            num-=20/100 * num
            console.log(num);
        }
    }
}
