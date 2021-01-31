function solve(arr) {
    let vowels=["a","e","i","o","u"]
    let password=arr[0].concat(arr[1]).split("")
    let replacer=arr[2].split("")
    let vowelCount=-1
    for(let i=0;i<password.length;i++){
        if(vowels.includes(password[i])) {
            vowelCount++
            if(vowelCount >= replacer.length) {
                vowelCount=0
            }
            password[i]=replacer[vowelCount].toUpperCase()
        }
    }
    console.log(`Your generated password is ${password.reverse().join("")}`);
}
