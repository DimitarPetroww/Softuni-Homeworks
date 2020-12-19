function addItem() {
    let textElement=document.getElementById("newItemText").value
    let contentElement=document.getElementById("newItemValue").value
    let option=document.createElement("option")
    option.innerText=textElement
    option.value=contentElement

    document.getElementById("menu").appendChild(option)
    
    document.getElementById("newItemText").value=""
    document.getElementById("newItemValue").value=""
}
