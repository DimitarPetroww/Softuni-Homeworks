function solve(input) {
    let wagons=input.shift().split(" ").map(Number)
    const maxPassangers=Number(input.shift())
    for(let i=0;i<input.length;i++) {
        let event=input[i]
        if(event.includes("Add")) {
            event=event.split(" ")
            let number=Number(event[1])

            wagons.push(number)            
        }else {
            for(let j=0;j<wagons.length;j++) {
                event=Number(event)
                if(wagons[j] + event <= maxPassangers) {
                    wagons[j]+=event
                    break;
                }
            }
        }
        
    }
    console.log(wagons.join(" "));
}
