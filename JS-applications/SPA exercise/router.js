const main = document.querySelector("main")
const header = document.querySelector("header")
const routes = [
    { path: "/", view: home },
    { path: "/register", view: register },
    { path: "/login", view: login },
    { path: "/create", view: create },
    { path: "/details", view: details },
    { path: "/edit", view: edit },
]
const router = async (path) => {
    const user = localStorage.getItem("user")
    const data = { email: user, logged: !!user, shoes: await getAll() }
    if (routes.find(x => x.path === path.slice(0, path.lastIndexOf("/")))) {
        const id = path.slice(path.lastIndexOf("/") + 1)
        path = path.slice(0, path.lastIndexOf("/"))
        history.pushState("", {}, path)
        main.innerHTML = routes.find(route => route.path === path).view(await getOne(id))
        return
    }
    header.innerHTML = nav(data)
    main.innerHTML = routes.find(route => route.path === path).view(data)
    history.pushState("", {}, path)
}