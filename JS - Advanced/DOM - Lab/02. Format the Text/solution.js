function solve() {
    let input=document.getElementById("input").innerText
    let output=document.getElementById("output")
    let sentences=input.split(".")
    while(sentences.length > 0) {
      let currentParagraph=sentences.splice(0 , 3).join(".")+ "."
      let paragraph=document.createElement("p")
      paragraph.innerText=currentParagraph
      output.appendChild(paragraph)
    }
  }