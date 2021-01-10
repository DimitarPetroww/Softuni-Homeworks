function addItem() {
    let ul=document.getElementById("items")
    let li=document.createElement("li")
    li.innerText=document.getElementById("newItemText").value
    ul.appendChild(li)
    document.getElementById("newItemText").value=""
}