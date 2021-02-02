function solve(string) {
    let string1=string.substring(0 , string.length/2)
    let string2=string.substring(string.length/2)
    console.log(string1.split("").reverse().join(""));
    console.log(string2.split("").reverse().join(""));
}
