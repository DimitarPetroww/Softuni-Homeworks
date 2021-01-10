function focus() {
    let inputs=document.querySelectorAll("input[type='text']")
    Array.from(inputs).forEach(x=> {
        x.addEventListener("focus" ,(e)=> {
            e.target.parentElement.setAttribute("class" , "focused")
        })
        x.addEventListener("blur" , (e) => {
            e.target.parentElement.removeAttribute("class")
        })
    })
}