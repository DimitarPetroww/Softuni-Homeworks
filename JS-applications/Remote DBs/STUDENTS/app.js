fetch("https://remote-dbs-exercise-default-rtdb.firebaseio.com/students.json")
    .then(response => response.json())
    .then(data => {
        Object.values(data).sort((o1, o2) => o1.ID - o2.ID).forEach(({ ID, firstName, lastName, facultyNumber, grade }) => {
            const table = renderTr("", {}, 
                renderTd(ID, {}),
                renderTd(firstName, {}),
                renderTd(lastName, {}),
                renderTd(facultyNumber, {}),
                renderTd(grade, {}))

            document.querySelector("#results > tbody").appendChild(table)
        })
    })


const renderTr = renderElement.bind(undefined, "tr")
const renderTd = renderElement.bind(undefined, "td")
const renderButton = renderElement.bind(undefined, "button")

function renderElement(type, content, attributes, ...childrens) {
    const element = document.createElement(type)

    if (content !== "") {
        element.innerHTML = content
    }

    Object.entries(attributes)
        .forEach(([attribute, value]) => {
            element.setAttribute(attribute, value)
        })
    element.append(...childrens)

    return element
}