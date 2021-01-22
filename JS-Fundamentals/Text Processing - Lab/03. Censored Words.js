function solve(text , word) {
    let i=0
   while(text.includes(word)) {
        text=text.replace(word , "*".repeat(word.length))
   }
    console.log(text);
}
