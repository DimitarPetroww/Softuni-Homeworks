function solve(arr) {
    let vips = []
    let regulars = []
    let command = arr.shift()
    while (command !== "PARTY") {
        if ((command[0] >= '0' && command[0] <= '9')) {
            vips.push(command)
        } else {
            regulars.push(command)
        }
        command = arr.shift()
    }
    let people = arr.shift()
    while (people !== undefined) {
        if (vips.includes(people) || regulars.includes(people)) {
            if ((people[0] >= '0' && people[0] <= '9')) {
                vips.splice(vips.indexOf(people) , 1)
            } else {
                regulars.splice(regulars.indexOf(people), 1)
            }
        }
        people = arr.shift()
    }

    console.log(`${vips.length + regulars.length}`);
    for (const vip of vips) {
        console.log(vip)
    }
    for (const regular of regulars) {
        console.log(regular)
    }
}
