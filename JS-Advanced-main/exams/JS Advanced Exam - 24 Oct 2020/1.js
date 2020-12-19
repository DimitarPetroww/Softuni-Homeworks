function solve() {
    let [nameIn, dateIn, selectIn] = [...document.querySelectorAll("input, input, select")]
    let btn = document.getElementsByTagName("button")[0]
    let modules = document.getElementsByClassName("modules")[0]

    function deleteModule(event) {
        if(event.target.parentElement.parentElement.children.length ===1) {
            event.target.parentElement.parentElement.parentElement.remove()
        }
        event.target.parentElement.remove()
        
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let [name, date, modul] = [nameIn, dateIn, selectIn].map(x => x.value.trim())
        if (!name || !date || !modul || modul === "Select module") {
            return
        }

        let find=Array.from(document.querySelectorAll(".module")).find(x=> x.querySelector("h3").textContent===`${modul.toUpperCase()}-MODULE`)

        if (find) {
            let li = document.createElement("li")
            li.className = "flex"
            let h4 = document.createElement("h4")

            let [currentDate, hour] = date.split("T")
            currentDate = currentDate.split("-").join("/")

            h4.textContent = `${name} - ${currentDate} - ${hour}`

            let delBtn = document.createElement("button")
            delBtn.className = "red"
            delBtn.textContent = "Del"
            delBtn.addEventListener("click", deleteModule)

            li.appendChild(h4)
            li.appendChild(delBtn)

            find.children[1].appendChild(li)
            let sorted=Array.from(find.children[1].children)
            .sort((a, b) => new Date(a.textContent.split(" - ")[1]) - new Date(b.textContent.split(" - ")[1]))
            
            while(find.children[1].firstChild) {
                find.children[1].removeChild(find.children[1].firstChild)
            }
            sorted.forEach(x=> {
                find.children[1].appendChild(x)
            })
        } else {
            let div = document.createElement("div")
            div.className = "module"
            let h3 = document.createElement("h3")
            h3.textContent = `${modul.toUpperCase()}-MODULE`
            div.appendChild(h3)
            let ul = document.createElement("ul")

            let li = document.createElement("li")
            li.className = "flex"
            let h4 = document.createElement("h4")

            let [currentDate, hour] = date.split("T")
            currentDate = currentDate.split("-").join("/")
            h4.textContent = `${name} - ${currentDate} - ${hour}`

            let delBtn = document.createElement("button")
            delBtn.className = "red"
            delBtn.textContent = "Del"
            delBtn.addEventListener("click", deleteModule)

            li.appendChild(h4)
            li.appendChild(delBtn)
            ul.appendChild(li)
            div.appendChild(ul)
            modules.appendChild(div)
        }
    })
}
