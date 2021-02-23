function solve() {
    const [lecture, date, module] = document.querySelectorAll("input, input, select")
    document.querySelector(".form-control > button").addEventListener("click", addLecture)
    const modules = document.querySelector(".modules")
    modules.addEventListener("click", delLecture)
    function addLecture(e) {
        e.preventDefault()
        if (lecture.value == "" || date.value == "" || module.value == "Select module") {
            return
        }
        const found = Array.from(modules.children).find(x => x.firstElementChild.textContent === `${module.value.toUpperCase()}-MODULE`)
        found ? addModule(found, lecture.value, date.value) : createModule(modules, module.value, lecture.value, date.value)

    }
    function delLecture(e) {
        if (e.target.tagName !== "BUTTON") {
            return
        }
        const li = e.target.parentElement
        const ul = li.parentElement
        li.remove()
        if (ul.children.length === 0) {
            ul.parentElement.remove()
        }
    }
    const append = (parent, ...childrens) => childrens.map(x => parent.appendChild(x))
    function addModule(found, lecture, date) {
        const parent = found.querySelector("ul")
        parent.appendChild(renderLi("", { class: "flex" }, renderH4(`${lecture} - ${formatDate(date).join(" - ")}`, {}), renderButton("Del", { class: "red" })))
        const sortedChildrens = Array.from(parent.children)
        .sort((a, b) => new Date(a.querySelector("h4").textContent.split(" - ")[1]) - new Date(b.querySelector("h4").textContent.split(" - ")[1]))
        append(parent, ...sortedChildrens)
    }
    function createModule(modules, module, lecture, date) {
        modules.appendChild(
            renderDiv("", { class: "module" },
                renderH3(`${module.toUpperCase()}-MODULE`, {}),
                renderUl("", {},
                    renderLi("", { class: "flex" },
                        renderH4(`${lecture} - ${formatDate(date).join(" - ")}`, {}),
                        renderButton("Del", { class: "red" }))))
        )
    }

    function render(type, content, attributes, ...childrens) {
        const element = document.createElement(type)

        if (content !== "") {
            element.innerHTML = content
        }
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))

        append(element, ...childrens)
        return element
    }
    function formatDate(date) {
        return [date.split("T")[0].replace(/-/g, "/"), date.split("T")[1]]
    }
    const renderDiv = render.bind(undefined, "div")
    const renderH3 = render.bind(undefined, "h3")
    const renderUl = render.bind(undefined, "ul")
    const renderLi = render.bind(undefined, "li")
    const renderH4 = render.bind(undefined, "h4")
    const renderButton = render.bind(undefined, "button")
};
