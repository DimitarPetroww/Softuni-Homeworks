function solve(arr) {  
    let inventory=arr.shift().split(" ")
    for(let i=0;i<arr.length;i++) {
        let [decision , item]=arr[i].split(" ")
        switch(decision) {
            case "Buy" :
            buy(item)
            break;
            case "Trash":
            trash(item)
            break;
            case "Repair":
            repair(item)
            break;
            case "Upgrade":
            upgrade(item)
            break;
        }

    }
    function buy(element) {
        if(inventory.includes(element)) {
        }else {
            inventory.push(element)
        }
    }
    function trash(element) {
        if(inventory.includes(element)) {
            inventory.splice(inventory.indexOf(element) , 1)
        }
    }
    function repair(element) {
        if(inventory.includes(element)) {
            inventory.splice(inventory.indexOf(element) , 1)
            inventory.push(element)
        }
    }
    function upgrade(element) {
        element=element.split("-")
        let oldOne=element[0]
        let upgraded=element[1]
        if(inventory.includes(oldOne)) {
            inventory.splice((inventory.indexOf(oldOne) + 1) , 0 , `${oldOne}:${upgraded}`)
        }
    }
    console.log(inventory.join(" "));
}
