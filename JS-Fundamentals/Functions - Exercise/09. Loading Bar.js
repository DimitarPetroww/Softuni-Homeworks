function solve(n) {
    let number=n / 10
    let loadProcess="%"
    let leftProcess="."
    let result=10-number
    console.log(`${n}% [${loadProcess.repeat(number)}${leftProcess.repeat(result)}]`);
    if(number === 10) {
        console.log(`${n}% Complete!`);
    }else {
        console.log("Still loading...");
    }
}
