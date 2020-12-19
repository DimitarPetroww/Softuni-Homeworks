function solve() {
    let input=document.getElementById("input")
    let button=document.getElementsByTagName("button")[0]

    let result=document.getElementById("result")
    let menu=document.getElementById("selectMenuTo")

    menu.innerHTML=`<option selected value="binary">Binary</option>`
    menu.innerHTML+=`<option selected value="hexadecimal">Hexadecimal</option>`

    button.addEventListener("click" , function() {
        if(menu.value==="hexadecimal") {
            result.value=(parseInt(input.value).toString(16)).toUpperCase()
        }else if(menu.value==="binary"){
            result.value=parseInt(input.value).toString(2)
        }
    })
}
