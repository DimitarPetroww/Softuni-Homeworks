function solve(words , text) {
    words=words.split(", ")
    text=text.split(" ")
    words.forEach(x => {
        if(text.includes("*".repeat(x.length))) {
            let index=text.indexOf("*".repeat(x.length))
            text[index]=x
        }
    })
   console.log(text.join(" "));
}
