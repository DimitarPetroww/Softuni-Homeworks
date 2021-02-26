const apiKey = "AIzaSyC1gUPSn95E-8u9UJbaEUVwm65cEZa94no"

function registerUser(e) {
    e.preventDefault()
    const [email, password, repeatPass] = [...document.forms[0]].slice(0, 3).map(x => x.value.trim())
    if (email === "" || password.length < 6 || repeatPass !== password) {
        return
    }

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
function loginUser(e) {
    e.preventDefault()
    const [email, password] = [...document.forms[0]].slice(0, 3).map(x => x.value.trim())
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
function createShoe(e) {
    e.preventDefault()
    const [name, price, imageURL, description, brand] = [...document.forms[0]].slice(0, 5).map(x => x.value.trim())
    if (name === "" || price === "" || imageURL === "" || description === "" || brand === "") {
        return
    }
    fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes.json`, {
        method: "POST",
        body: JSON.stringify({ name, price, imageURL, description, brand, peopleBought: [], creator: localStorage.getItem("user") })
    })
        .then(data => {
            router("/")
        })
        .catch(console.log)
}
function editShoe(e) {
    const id = e.target.dataset.key
    const [name, price, imageURL, description, brand] = [...document.forms[0]].slice(0, 5).map(x => x.value.trim())
    console.log(name, price, imageURL, description, brand);
    fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({name, price, imageURL, description, brand})
    })
    .then(() => {
        router(`/details/${id}`)
    })
}
function deleteShoe(id) {
    fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes/${id}.json`, {
        method: "DELETE",
    })
    .then(() => {
        router(`/`)
    })
}
async function buyShoe(id) {
    const data = await (await fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes/${id}.json`)).json()
    const peopleBought = data.peopleBought || []
    peopleBought.push(localStorage.getItem("user"))
    await fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({peopleBought})
    })
    router(`/details/${id}`)
}
async function getAll() {
    const data = await (await fetch("https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes.json")).json()
    if (data) {
        return Object.entries(data)
            .reduce((a, [id, shoe]) => {
                a.push(Object.assign(shoe, { id }))
                return a
            }, [])
    }
    return []
}
async function getOne(id) {
    const data = await (await fetch(`https://shoes-workshop-4c218-default-rtdb.firebaseio.com/shoes/${id}.json`)).json()
    if (data) {
        return Object.assign(data, {id})
    }
    return {}
}