function solve(input) {
    let username=input[0]
    let isLogged=false
    let tries=0
    let isEnough=false
    for(let i=1;i<=input.length;i++) {
        let current=input[i]
        let password=""
        let word=current
        for(let j=word.length-1;j>=0;j--) {
            let letter=word[j]
            password+=letter
            
        }
        if(password===username) {
            console.log(`User ${username} logged in.`);
            isLogged=true
            break;
        }else {
            tries++
            console.log("Incorrect password. Try again.");
        }if (tries===3) {
            console.log(`User ${username} blocked!`);
            isEnough=true
            break;
        }
    }
}
