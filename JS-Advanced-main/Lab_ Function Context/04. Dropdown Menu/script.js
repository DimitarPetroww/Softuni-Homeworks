function solve() {
    let [dropDownBtn, menu, box] = document.querySelectorAll("#dropdown , #dropdown-ul , #box")
    let clicked = 0
    dropDownBtn.addEventListener("click", () => {
        menu.style.display = "block"
        clicked++
        if (clicked % 2 === 0) {
            menu.style.display = "none"
            box.style.color="white"
            box.style.backgroundColor="black"
        }
    })
    menu.addEventListener("click", (e) => {
        box.style.backgroundColor = e.target.textContent
        box.style.color="black"
    })

}
