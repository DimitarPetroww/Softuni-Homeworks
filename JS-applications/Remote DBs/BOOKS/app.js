async function loadBooks() {
    return await fetch("https://remote-dbs-exercise-default-rtdb.firebaseio.com/books.json")
}
async function getBook(title, author, isbn) {
    return await fetch("https://remote-dbs-exercise-default-rtdb.firebaseio.com/books.json",
        { method: "POST", body: JSON.stringify({ title, author, isbn }) })
}
async function deleteBookFromDB(id) {
    return await fetch(`https://remote-dbs-exercise-default-rtdb.firebaseio.com/books/${id}.json`,
        { method: "DELETE" })
}
async function editBookFromDB(id, title, author, isbn) {
    return await fetch(`https://remote-dbs-exercise-default-rtdb.firebaseio.com/books/${id}.json`,
        { method: "PATCH", body: JSON.stringify({ title, author, isbn }) })
}
document.getElementById("loadBooks").addEventListener("click", renderBooks)
document.querySelector("#create-form > button").addEventListener("click", addBook)
document.querySelector("table > tbody").addEventListener("click", buttonHandler)
document.querySelector("#edit-form > button").addEventListener("click", editBook)

function editBook(e) {
    e.preventDefault()
    const [title, author, isbn] = document.querySelectorAll("#edit-form > input")
    const id = document.querySelector("#edit-form > h3").dataset.key
    editBookFromDB(id, title.value, author.value, isbn.value)
        .then(() => {
            renderBooks()
            document.getElementById("create-form").style.display = "block"
            document.getElementById("edit-form").style.display = "none"
        })
}
const buttonMap = {
    "Edit": showEditForm,
    "Delete": deleteBook
}
function buttonHandler(e) {
    if (e.target.tagName !== "BUTTON") {
        return
    }
    buttonMap[e.target.className](e.target.parentElement)
}
function showEditForm(parentTarget) {
    document.getElementById("create-form").style.display = "none"
    document.getElementById("edit-form").style.display = "block"

    const [title, author, isbn] = document.querySelectorAll("#edit-form > input")

    const [currentTitle, currentAuthor, currentIsbn] = parentTarget.parentElement.querySelectorAll("td")

    document.querySelector("#edit-form > h3").setAttribute("data-key", parentTarget.dataset.key)
    title.value = currentTitle.innerHTML
    author.value = currentAuthor.innerHTML
    isbn.value = currentIsbn.innerHTML
}

function deleteBook(parentTarget) {
    deleteBookFromDB(parentTarget.dataset.key)
        .then(() => {
            renderBooks()
        })
}

function renderBooks() {
    const tbody = document.querySelector("tbody")
    if (tbody.innerHTML !== "") {
        tbody.innerHTML = ""
    }
    loadBooks()
        .then(response => response.json())
        .then(data => {
            Object.entries(data).forEach(([id, { author, title, isbn }]) => {
                const table = renderTr("", {}, renderTd(title, {}),
                    renderTd(author, {}),
                    renderTd(isbn, {}),
                    renderTd("", { "data-key": id },
                        renderButton("Edit", { class: "Edit" }),
                        renderButton("Delete", { class: "Delete" })))
                tbody.appendChild(table)
            })
        })
}
function addBook(e) {
    e.preventDefault()
    const [title, author, isbn] = document.querySelectorAll("form > input")
    if (title.value === "" || author.value === "" || isbn.value === "") {
        return
    }
    getBook(title.value, author.value, isbn.value)
        .then(() => {
            renderBooks()
        })
    title.value = ""
    author.value = ""
    isbn.value = ""
}

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