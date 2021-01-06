function solve(arr, commands) {
    let isEnd=false
    for (let i = 0; i < commands.length; i++) {
        let event = commands[i].split(" ")
        let command = event.shift()
        let index = Number(event.shift())
        let el = event.map(Number)
        switch (command) {
            case "add":
                add(index, el[0])
                break;
            case "addMany":
                addMany(index,el)
                break;
            case "contains":
                contains(index)
                break;
            case "remove" :
                remove(index)
                break;
            case "shift":
                shift(index)
            break;
            case "sumPairs" :
                sumPairs()
            break;
            case "print" :
                console.log(`[ ${arr.join(', ')} ]`);
                isEnd=true
                break;
        }   
    }
    function add(p1 , p2) {
        arr.splice(p1 , 0 , Number(p2))
    }
    function addMany(p1 , p2) {
        arr.splice(p1 , 0 , ...p2)
    }
    function contains(p1) {
        if(arr.includes(p1)) {
            console.log(arr.indexOf(p1));
        }else {
            console.log(-1);
        }
    }
    function remove(p1) {
        arr.splice(p1 , 1)
    }
    function shift(p1) {
        for(let i=0;i<p1;i++) {
            let el=arr.shift()
            arr.push(el)
        }
    }
    function sumPairs() {
        let sum=[]
        for(let i=0;i<arr.length;i++) {
            if(arr[i + 1] !== undefined) {
                sum.push(arr[i] + arr[++i])
            }else {
                sum.push(arr[i])
            }

        }
        arr=sum
    }
    if(!isEnd) {
        console.log(`[ ${arr.join(', ')} ]`);
    }
}
