export default async function () {
    const { email, password } = this.params
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.app.userData.email = email
            this.app.userData.loggedIn = true
            const info = document.getElementById("infoBox")
            info.textContent = "Login was succesful"
            info.style.display = "block"
            setTimeout(function () {
                info.style.display = "none"
            }, 2000)
            this.redirect("#/home")
        })
        .catch((e) => {
            const info = document.getElementById("errorBox")
            info.textContent = e.message
            info.style.display = "block"
            setTimeout(function () {
                info.style.display = "none"
            }, 2000)
        })
}
