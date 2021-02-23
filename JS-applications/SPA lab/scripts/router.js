const routes = {
    "/": "home-template",
    "/login": "login-template",
    "/register": "register-template",
    "/add": "add-template",
}

async function router(path) {
    if (path === "/logout") {
        localStorage.removeItem("user")
        router("/login")
        return
    }
    Handlebars.registerPartial("navigation", document.getElementById("navigation-template").innerHTML)
    Handlebars.registerPartial("movies", document.getElementById("movies-template").innerHTML)
    Handlebars.registerPartial("movie", document.getElementById("movie-template").innerHTML)
    const user = localStorage.getItem("user") || ""
    const data = await (await fetch("https://movies-workshop-abeee-default-rtdb.firebaseio.com/movies.json")).json() || {}
    const movies = Object.entries(data)
        .reduce((a, [id, data]) => {
            a.push({ id: id, imageURL: data.imageURL, title: data.title })
            return a
        }, [])
    const template = Handlebars.compile(document.getElementById(routes[path]).innerHTML)
    document.getElementById("container").innerHTML = template({ isLogged: !!user, email: user, movies: movies || undefined })

    history.pushState({}, "", path)
}
window.addEventListener("popstate", () => {
    router(location.pathname)
})