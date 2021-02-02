function solve(string) {
    string=string.split(" ").map(x=> x.trim()).filter(x => x)
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const actions = {
        divide : (num1 , num2) => num1/num2,
        multiply : (num1 , num2)=> num1 * num2,
        substract : (num1 , num2)=> num1 - num2,
        add : (num1 , num2) => num1 * num2
    }
    let result=0
    for (const [...word] of string) {
        let first=word.shift()
        let last=word.pop()
        let num=Number(word.join(""))
        let sum=0
        if(first===first.toUpperCase()) {
            sum+=num / (alphabet.indexOf(first.toLowerCase()) + 1)
        }else if(first===first.toLowerCase()) {
            sum+=num * (alphabet.indexOf(first.toLowerCase()) + 1) 
        }
        if(last===last.toUpperCase()) {
            sum-=(alphabet.indexOf(last.toLowerCase()) + 1)
        }else if(last===last.toLowerCase()) {
            sum+=(alphabet.indexOf(last.toLowerCase()) + 1)
        }
        result+=sum
    }
    console.log(result.toFixed(2));
}
