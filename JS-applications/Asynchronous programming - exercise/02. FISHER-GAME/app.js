function attachEvents() {
    const [anglerInput, weightInput, speciesInput, locationInput, baitInput, captureInput] = document.querySelectorAll("#addForm > input")
    const [loadBtn, addBtn] = document.querySelectorAll("button")
    addBtn.addEventListener("click", () => {
        add(anglerInput.value, weightInput.value, speciesInput.value, locationInput.value, baitInput.value, captureInput.value)
    })
    loadBtn.addEventListener("click", () => {
        get()
        .then(loadCatches)
    })
    document.getElementById("catches").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") {
            return
        }
        if (e.target.className === "delete") {
            deleteCatch(e.target.parentElement.getAttribute("data-id"))
                .then(() => {
                    return get()
                        .then(loadCatches)
                })
        } else if (e.target.className === "update") {
            const [angler, weight, species, location, bait, captureTime] = e.target.parentElement.querySelectorAll("input")
            updateCatch
                (e.target.parentElement.getAttribute("data-id"),
                [angler.value, weight.value, species.value, location.value, bait.value, captureTime.value]
                )
        }
    })
    function loadCatches(data) {
        document.getElementById("catches").innerHTML = ""
        Object.entries(data).forEach(([id, obj]) => {
            let divCatch = renderDiv(id)
            Object.values(renderObj).forEach((o) => {
                let label = renderLabel(o.value)
                let input = renderInput(o.class, obj[o.class], o.type)
                let hr = document.createElement("hr")
                divCatch.append(label, input, hr)
                // divCatch.appendChild(label)
                // divCatch.appendChild(input)
                // divCatch.appendChild(hr)
            })
            divCatch.appendChild(renderButton("update", "Update"))
            divCatch.appendChild(renderButton("delete", "Delete"))
            document.getElementById("catches").appendChild(divCatch)
        })
    }
    const renderMap = {
        "button": "innerHTML",
        "input": "value",
        "label": "innerHTML"
    }
    const renderObj = {
        "angler": {
            value: "Angler",
            class: "angler",
            type: "text"
        },
        "weight": {
            value: "Weight",
            class: "weight",
            type: "number"
        },
        "species": {
            value: "Species",
            class: "species",
            type: "text"
        },
        "location": {
            value: "Location",
            class: "location",
            type: "text"
        },
        "bait": {
            value: "Bait",
            class: "bait",
            type: "text"
        },
        "Capture Time": {
            value: "Capture Time",
            class: "captureTime",
            type: "number"
        },
    }
    function renderElement(elementType, className, value, type) {
        const element = document.createElement(elementType)
        if (type) {
            element.type = type
        }
        if (className) {
            element.className = className
        }
        if (elementType === "div") {
            element.setAttribute("data-id", value)
        } else {
            element[renderMap[elementType]] = value
        }
        return element
    }
    let renderDiv = renderElement.bind(undefined, "div", "catch")
    let renderLabel = renderElement.bind(undefined, "label", "")
    let renderInput = renderElement.bind(undefined, "input")
    let renderButton = renderElement.bind(undefined, "button")
    async function add(angler, weight, species, location, bait, captureTime) {
        return await (await (await fetch("https://fisher-game.firebaseio.com/catches.json", {
            method: "POST",
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        })).json())
    }
    async function get() {
        return await (await fetch("https://fisher-game.firebaseio.com/catches.json")).json()
    }
    async function deleteCatch(id) {
        return await fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: "DELETE"
        })
    }
    async function updateCatch(id, [angler, weight, species, location, bait, captureTime]) {
        return await (await fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: "PUT",
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        }))
    }
}
attachEvents();

