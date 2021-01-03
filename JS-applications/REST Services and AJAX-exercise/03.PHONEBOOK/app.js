function attachEvents() {
    let [btnLoad, btnCreate] = document.querySelectorAll("#btnLoad, #btnCreate")
    let ul = document.getElementById("phonebook")
    btnLoad.addEventListener("click", onLoad)
    btnCreate.addEventListener("click", onCreate)

    function onLoad() {
        ul.innerHTML = ""
        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
            .then((response) => response.json())
            .then((data) => {
                Object.entries(data)
                    .map(([key, { person, phone }]) => {
                        appendListItem(key, person, phone)
                    })
            }).catch(() => {
                ul.innerHTML = `No recources found!!`
            })
    }

    function onCreate() {
        let [person, phone] = document.querySelectorAll("#person, #phone")
        if (person.value === "" || phone.value === "") {
            return
        }
        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json", {
            method: "POST",
            body: JSON.stringify({ "person": person.value, "phone": phone.value })
        })
        .then(() => onLoad())
    }
    function appendListItem(key, person, phone) {
        let btnDelete = document.createElement("button")
        btnDelete.innerHTML = "Delete"
        btnDelete.addEventListener("click", () => {
            fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, { method: "DELETE" })
            .then(() => onLoad())
        })
        let li = document.createElement("li")
        li.innerHTML = `${person}:${phone}`
        li.appendChild(btnDelete)
        ul.appendChild(li)
    }
}
attachEvents();