function create(words) {
   let content=document.getElementById("content")

   words.forEach(x => {
      let div=document.createElement("div")
      let p=document.createElement("p")
      p.innerHTML=x
      p.style.display="none"

      div.appendChild(p)
      div.addEventListener("click" , (e)=> {
            p.style.display="block"
      })

      content.appendChild(div)
   })
}
