export default async function () {
    const { email, password, repeatPassword } = this.params
    if (password === repeatPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.app.userData.email = email
            this.app.userData.loggedIn = true
            this.redirect("#/home")
            const info = document.getElementById("infoBox")
            info.textContent = "Registration was succesful"
            info.style.display = "block"
            setTimeout(function() {
                info.style.display = "none"
            }, 2000)
        })
        .catch((e) => {
            const info = document.getElementById("errorBox")
            info.textContent = e.message
            info.style.display = "block"
            setTimeout(function() {
                info.style.display = "none"
            }, 2000)
        })
    }else {
        const info = document.getElementById("errorBox")
        info.textContent = "Passwords must match"
        info.style.display = "block"
        setTimeout(function() {
            info.style.display = "none"
        }, 2000)
    }
}
