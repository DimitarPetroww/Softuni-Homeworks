function solve(...strings) {
    console.log(strings.map(x=> x.length).reduce((a , b) => a + b  , 0));
    console.log(Math.floor((strings.map(x=> x.length).reduce((a , b) => a + b  , 0)) / strings.length))
}
