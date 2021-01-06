function solve(arr) {
    let going = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let event = current.split(" ")
        var name = event[0]
        if (current.includes("is going")) {
            if(going.includes(name)) {
                console.log(`${name} is already in the list!`);
            }else {
                if(arr.includes(`${name} is not going!`)) {

                }else {
                    going.push(name)
                }
            }
            
        } else {
            if(arr.includes(`${name} is going!`)) {

            }else {
                console.log(`${name} is not in the list!`);
            }

        }
    }
    console.log(going.join("\n"));
}
