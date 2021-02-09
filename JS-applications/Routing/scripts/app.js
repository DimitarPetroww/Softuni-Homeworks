import home from "./controllers/home.js"
import about from "./controllers/about.js"
import login from "./controllers/login.js"
import register from "./controllers/register.js"
import catalog from "./controllers/catalog.js"
import details from "./controllers/details.js"
import create from "./controllers/create.js"
import edit from "./controllers/edit.js"
import registerUser from "./controllers/registerUser.js"
import logoutUser from "./controllers/logoutUser.js"
import loginUser from "./controllers/loginUser.js"
import leave from "./controllers/leave.js"
import join from "./controllers/join.js"
import createTeam from "./controllers/createTeam.js"
import editTeam from "./controllers/editTeam.js"

export default (() => {
    const app = Sammy("#main", route)

    function route() {
        this.use("Handlebars", "hbs")

        this.userData = {
            loggedIn: false,
            hasTeam: false,
            isAuthor: false,
        }
        //GET
        this.get("#/home", home)
        this.get("#/about", about)
        this.get("#/login", login)
        this.get("#/register", register)
        this.get("#/catalog", catalog)
        this.get("#/catalog/:id", details)
        this.get("#/create", create)
        this.get("#/edit/:id", edit)
        this.get("#/logout", logoutUser)
        this.get("#/leave/:id", leave)
        this.get("#/join/:id", join)
        this.get("#/catalog/:id", details)
        //POST
        this.post("#/register", (ctx) => { registerUser.call(ctx) })
        this.post("#/login", (ctx) => { loginUser.call(ctx) })
        this.post("#/create", (ctx) => { createTeam.call(ctx) })
        this.post("#/edit/:id", (ctx) => { editTeam.call(ctx) })
    }

    app.run("#/home")
})()