function solve() {
    let btn = document.getElementsByTagName("button")[0]
    let text = document.getElementsByTagName("input")[0]

    let database = {}
    for (let i = 65; i <= 90; i++) {
        let current = String.fromCharCode(i)
        database[current] = i - 65
    }
    btn.addEventListener('click', clicked)
    function clicked() {
        let array = document.getElementsByTagName("ol")[0].children

        let currentName = text.value.toString()[0].toUpperCase() + text.value.slice(1).toLowerCase()
        let capitalLetter = currentName[0]

        if (database[capitalLetter] != undefined) {
            let index = database[capitalLetter]
            let currentLiElement = array[index]
            
            if (currentLiElement.innerText != "") {
                currentLiElement.textContent += ", "
            }
            currentLiElement.textContent+=currentName
        }
        text.value = ""
    }
}
