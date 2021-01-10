function solve(...strings) {
    return [strings.map(x=> x.length).reduce((a , b) => a + b  , 0),
    Math.floor((strings.map(x=> x.length).reduce((a , b) => a + b  , 0)) / strings.length)].join("\n")
}