function solve() {
    const [name, age, kind, owner, addBtn] = Array.from(document.querySelector("#container").children)
    const html = {
        "adoption": () => document.querySelector("#adoption > ul"),
        "adopted": () => document.querySelector("#adopted > ul")
    }
    addBtn.addEventListener("click", addPet)
    function clearValues(...inputNodes) {
        inputNodes.map(node => node.value = "")
    }   

    function addPet(e) {
        e.preventDefault()
        if(name.value == "" || age.value == "" || kind.value == "" || owner.value == "" || isNaN(age.value)) {
            return
        }
        const paragraph = p(`<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`)
        const spanElement = span(`Owner: ${owner.value}`)
        const contactButton = button("Contact with owner", {}, {click: takePet})
        const liElement = li("", {}, {}, paragraph, spanElement, contactButton)
        append(html.adoption(), liElement)
        clearValues(name, age, kind, owner)
    }
    function takePet(e) {
        const parent = e.target.parentElement
        e.target.remove()
        const inputElement = input({placeholder: "Enter your names"})
        const takeButton = button("Yes! I take it!", {}, {click: adoptPet})
        const divElement = div("", {}, {}, inputElement, takeButton)
        append(parent, divElement)
    }
    function adoptPet(e) {
        const div = e.target.parentElement
        const li = div.parentElement
        const input = div.querySelector("input")
        if(input.value === "") {
            return
        }
        div.remove()
        li.querySelector("span").innerHTML = `New Owner: ${input.value}`
        const checkButton = button("Checked", {}, {click: removePet})
        append(li, checkButton)
        append(html.adopted(), li)
    }
    function removePet(e) {
        e.target.parentElement.remove()
    }
    const append = (parent, ...children) => children.map(node=> parent.appendChild(node))
    const li = c.bind(undefined, "li")
    const div = c.bind(undefined, "div")
    const input = c.bind(undefined, "input", "")
    const p = c.bind(undefined, "p")
    const span = c.bind(undefined, "span")
    const button = c.bind(undefined, "button")

    function c(type, content, attributes = {}, events = {}, ...children) {
        const e = document.createElement(type)
        if(content !== "") {
            e.innerHTML = content
        }
        Object.entries(attributes).map(([key, value]) => e.setAttribute(key, value))
        Object.entries(events).map(([type, handler]) => e.addEventListener(type, handler))
        append(e, ...children)
        return e
    }
}


