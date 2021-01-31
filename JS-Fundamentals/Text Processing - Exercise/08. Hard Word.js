function solve(matrix) {
    let text = matrix[0].split(" ")
    let words = matrix[1]

    words.forEach(x => {
        if (text.includes("_".repeat(x.length))) {
            let index = text.indexOf("_".repeat(x.length))
            text[index] = x
        }else {
            if(text.includes(`${"_".repeat(x.length)}.`)) {
                let index=text.indexOf((`${"_".repeat(x.length)}.`))
                text[index]=`${x}.`
            }else if(text.includes(`${"_".repeat(x.length)}!`)) {
                let index=text.indexOf((`${"_".repeat(x.length)}!`))
                text[index]=`${x}!`
            }else {
                let index=text.indexOf((`${"_".repeat(x.length)},`))
                text[index]=`${x},`
            }
        }
    })
    console.log(text.join(" "));
}
