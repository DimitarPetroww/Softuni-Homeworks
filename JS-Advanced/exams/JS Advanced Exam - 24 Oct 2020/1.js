function solve() {
    let [lecture, date, module, btn] = document.querySelectorAll("input, input, select, button")
    let modules = document.querySelector(".modules")
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        if (!lecture.value || !date.value || module.value === `Select module`) {
            return
        }
        let currentModule = Array.from(document.querySelectorAll(".module")).find(x => x.querySelector("h3").textContent === `${module.value.toUpperCase()}-MODULE`)
        if (currentModule) {
            addModule(currentModule)
        } else {
            createModule()
        }

    })
    function addModule(currentModule) {
        let li = document.createElement("li")
        let h4 = document.createElement("h4")
        let button = document.createElement("button")

        li.classList.add("flex")
        button.classList.add("red")
        button.textContent = "Del"

        h4.textContent = `${lecture.value} - ${formatDate(date.value).join(" - ")}`

        li.appendChild(h4)
        li.appendChild(button)
        currentModule.querySelector("ul").appendChild(li)

        Array.from(currentModule.querySelector("ul").children)
            .sort((a, b) => new Date(a.innerText.split(" - ")[1]) - new Date(b.innerText.split(" - ")[1])).map(x => currentModule.querySelector("ul").appendChild(x))
    }
    function createModule() {
        let divModule = document.createElement("div")
        let h3 = document.createElement("h3")
        let ul = document.createElement("ul")
        let li = document.createElement("li")
        let h4 = document.createElement("h4")
        let button = document.createElement("button")

        li.classList.add("flex")
        button.classList.add("red")
        button.textContent = "Del"
        
        h4.textContent = `${lecture.value} - ${formatDate(date.value).join(" - ")}`

        h3.textContent = `${module.value.toUpperCase()}-MODULE`

        li.appendChild(h4)
        li.appendChild(button)
        ul.appendChild(li)

        divModule.appendChild(h3)
        divModule.appendChild(ul)
        divModule.classList.add("module")
        divModule.addEventListener("click", deleteElement)

        modules.appendChild(divModule)
    }
    function deleteElement(e) {
        if (e.target.tagName !== "BUTTON") {
            return
        }
        e.target.parentElement.remove()
        if (e.currentTarget.querySelector("ul").children.length === 0) {
            e.currentTarget.remove()
        }
    }
    function formatDate(date) {
        return [date.split("T")[0].replace(/-/g, "/"), date.split("T")[1]]
    }
}
