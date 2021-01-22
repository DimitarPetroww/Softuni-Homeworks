function solve(string , word){
    let arr=string.split(" ")
    let count=0
    for (const char of arr) {
        if(char===word) {
            count++
        }
    }
    console.log(count);
}
