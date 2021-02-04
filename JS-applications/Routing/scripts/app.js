import loadPartials from './loadPartials.js';
export default (() => {
    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs")
        this.get("/logout", function(e) {
            firebase.auth().signOut()
            .then(r => {
                localStorage.removeItem("userInfo")
                e.redirect("/home")
            })
            .catch(error)
        })
        this.get("/home", function (e) {
            if (localStorage.getItem("userInfo")) {
                e.loggedIn = true
                e.email = JSON.parse(localStorage.getItem("userInfo")).email
            }
            loadPartials(e)
                .then(function () {
                    this.partial("./templates/home/home.hbs")
                })
        })
        this.get("/about", function (e) {
            if (localStorage.getItem("userInfo")) {
                e.loggedIn = true
                e.email = JSON.parse(localStorage.getItem("userInfo")).email
            }
            loadPartials(e)
                .then(function () {
                    this.partial("./templates/about/about.hbs")
                })
        })
        this.get("/login", function (e) {
            this.loadPartials({
                "header": "./templates/common/header.hbs",
                "footer": "./templates/common/footer.hbs",
                "loginForm": "./templates/login/loginForm.hbs"
            })
                .then(function () {
                    this.partial("./templates/login/loginPage.hbs")
                })
        })
        this.get("/register", function (e) {
            this.loadPartials({
                "header": "./templates/common/header.hbs",
                "footer": "./templates/common/footer.hbs",
                "registerForm": "./templates/register/registerForm.hbs"
            })
                .then(function () {
                    this.partial("./templates/register/registerPage.hbs")
                })
        })
        this.get("/catalog", function(e) {
            if (localStorage.getItem("userInfo")) {
                e.loggedIn = true
                e.email = JSON.parse(localStorage.getItem("userInfo")).email
            }
            loadPartials(e)
            .then(function() {
                this.partial("./templates/catalog/teamCatalog.hbs")
            })
        })
        //POST
        this.post("/login", function (e) {
            let { email, password } = e.params

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function ({ user: { email, uid } }) {
                    localStorage.setItem("userInfo", JSON.stringify({ email, uid }))
                    e.redirect("/home")
                })
                .catch(error)
        })
        this.post("/register", function (e) {
            let { email, password, repeatPassword } = e.params
            if (password !== repeatPassword) {
                const alert = document.getElementById("errorBox")
                alert.textContent = "Passwords must match"
                alert.style.display = "block"
                setTimeout(function () {
                    alert.style.display = "none"
                }, 1500)
                return
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function () {
                    e.redirect("/login")
                })
                .catch(error)
        })
    })
    app.run("/home")
})()

function error(error) {
    const alert = document.getElementById("errorBox")
    alert.textContent = error.message
    alert.style.display = "block"
    setTimeout(function () {
        alert.style.display = "none"
    }, 1500)
}