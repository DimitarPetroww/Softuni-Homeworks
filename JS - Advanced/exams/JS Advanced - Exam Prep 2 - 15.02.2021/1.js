function solution() {
    const [input, btn] = Array.from(document.querySelector(".card > div").children)
    const [giftSection, sentSection, discardedSection] = document.querySelectorAll(".card > ul")
    btn.addEventListener("click", addGift)

    function addGift(e) {
        e.preventDefault()
        const send = c("button", "Send", { id: "sendButton" }, {})
        const discard = c("button", "Discard", { id: "discardButton" }, {})
        const li = c("li", input.value, { class: "gift" }, { "click": sendOrDiscard }, send, discard)
        appendChilds(giftSection, li)
        sortNodes(giftSection.children).map(node => giftSection.appendChild(node))
        input.value = ""
    }

    function sendOrDiscard(e) {
        if (e.target.tagName !== "BUTTON") {
            return
        }
        const li = e.target.parentElement
        Array.from(li.children).map(btn => btn.remove())

        const o = {
            "Send": sentSection,
            "Discard": discardedSection
        }

        appendChilds(o[e.target.textContent], li)
    }


    const sortNodes = (elements) => Array.from(elements).sort((a, v) => a.textContent.localeCompare(v.textContent))

    const appendChilds = (parent, ...childrens) => childrens.map(node => parent.appendChild(node))

    function c(type, content, attributes, events, ...childrens) {
        const element = document.createElement(type)
        if (content !== "") {
            element.innerHTML = content
        }
        Object.entries(attributes).map(([key, value]) => {
            element.setAttribute(key, value)
        })
        Object.entries(events).map(([type, fn]) => {
            element.addEventListener(type, fn)
        })
        appendChilds(element, ...childrens)
        return element
    }
}
