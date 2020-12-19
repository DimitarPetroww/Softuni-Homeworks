function addItem() {
    let input = document.getElementById("newText")
    let ulElements = document.getElementById("items")
    let li = document.createElement("li")
    let link='<a href="#">[Delete]</a>'
    li.innerHTML+=input.value + link
    li.addEventListener("click" , (e) => {
        if(e.target.tagName ==="A" ) e.target.parentElement.remove()
    })
    ulElements.appendChild(li)
    input.value=""
}
