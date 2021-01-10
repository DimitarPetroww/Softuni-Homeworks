function solve(...n) {
    return `The largest number is ${n.sort((a , b) => a - b).splice(-1).join("")}.`
}