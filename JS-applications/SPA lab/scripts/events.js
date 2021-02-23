const apiKey = "AIzaSyCxeT-ejL7A3V5sF9H0lGNPN0wRRAhwUjU"
const [error, success] = document.querySelectorAll(".notifications")
console.log(error, success);
router("/")

function navigate(e) {
    e.preventDefault()
    if (e.target.tagName !== "A") {
        return
    }
    router(new URL(e.target.href).pathname)
}
function login(e) {
    e.preventDefault()
    const [email, password] = [...e.currentTarget.querySelectorAll("input")].map(x => x.value.trim())
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({ email, password })
    })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("user", data.email)    
            router("/")
        })
        .catch(console.log)
}
function register(e) {
    e.preventDefault()
    const [email, password, repeatPassword] = [...e.currentTarget.querySelectorAll("input")].map(x => x.value)
    if (password !== repeatPassword || email === "" || password.length < 6) return
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({ email, password })
    })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("user", data.email)
            router("/")
        })
        .catch(console.log)
}
function onAddBtnClick(e) {
    e.preventDefault()
    router("/add")
}
function onDetailsBtnClick(e) {
    e.preventDefault()
    Handlebars.registerPartial("navigation", document.getElementById("navigation-template").innerHTML)
    const user = localStorage.getItem("user") || ""
    const path = new URL(e.currentTarget.href).pathname
    const id = path.slice(path.lastIndexOf("/") + 1)
    history.pushState({}, "", e.currentTarget.href)
    fetch(`https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies/${id}.json`)
        .then(r => r.json())
        .then(data => {
            const template = Handlebars.compile(document.getElementById("details-template").innerHTML)
            Object.assign(data, { isLogged: !!user, email: user, creator: data.creator === user, id: id, likedAlready: data.peopleLiked.includes(user), likes: data.peopleLiked.length })
            document.getElementById("container").innerHTML = template(data)
        })
}
function addMovie(e) {
    e.preventDefault()
    const [title, description, imageURL] = [...e.currentTarget.querySelectorAll("input, textarea")].map(x => x.value)
    const creator = localStorage.getItem("user")
    if (title === "" || description === "" || imageURL === "") return
    fetch("https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify({ title, description, imageURL, creator, peopleLiked: [] })
    })
        .then(() => {
            router("/")
        })
}
async function likeMovie(e) {
    e.preventDefault()
    const user = localStorage.getItem("user")
    const id = new URL(e.target.href).pathname.slice(1)
    const data = await (await fetch(`https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies/${id}.json`)).json()
    const peopleLiked = data.peopleLiked || []
    peopleLiked.push(user)
    fetch(`https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({ peopleLiked: peopleLiked })
    })
        .then(() => {
            router(`/details/${id}`)
        })
}
function onEditClick(e) {
    e.preventDefault()
    Handlebars.registerPartial("navigation", document.getElementById("navigation-template").innerHTML)
    const user = localStorage.getItem("user") || ""
    const path = new URL(e.currentTarget.href).pathname
    const id = path.slice(path.lastIndexOf("/") + 1)
    history.pushState({ id }, "", e.currentTarget.href)
    const template = Handlebars.compile(document.getElementById("edit-template").innerHTML)
    document.getElementById("container").innerHTML = template({ isLogged: !!user, email: user })
}
function editMovie(e) {
    e.preventDefault()
    const [title, description, imageURL] = [...e.currentTarget.querySelectorAll("input, textarea")].map(x => x.value)
    fetch(`https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies/${history.state.id}.json`, {
        method: "PATCH",
        body: JSON.stringify({ title, description, imageURL })
    })
        .then(() => {
            router(`/`)
        })
}