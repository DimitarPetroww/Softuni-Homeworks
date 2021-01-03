function attachEvents() {
    let [btnLoad, btnCreate] = document.querySelectorAll("#btnLoad, #btnCreate")
    let ul = document.getElementById("phonebook")
    let obj = {}

    btnLoad.addEventListener("click", onLoad)

    btnCreate.addEventListener("click", onCreate)

    document.querySelector("ul").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") {
            return
        }
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${obj[e.target.parentElement.innerText.split(": ")[1].slice(0, -6)]}.json`
        , 
        {
         method: 'DELETE' 
        })
        .then(() => onLoad())
    })
    function onLoad() {
        ul.innerHTML = ""
        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
            .then((response) => response.json())
            .then((data) => {
                Object.entries(data)
                    .forEach(([key, { person, phone }]) => {
                        ul.innerHTML += createElement(person, phone)
                        obj[phone] = key
                    })
            }).catch(() => {
                ul.innerHTML=`No phonebooks to show!`
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
    function createElement(person, phone) {
        return `<li>${person}: ${phone}<button>Delete</button></li>`
    }
}
attachEvents();