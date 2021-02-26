(() => {
    window.addEventListener("popstate", () => {
        router(location.pathname)
    })
    document.body.addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.tagName === "A") {
            const path = new URL(e.target.href).pathname
            switch (path) {
                case "/logout":
                    localStorage.removeItem("user")
                    router("/")
                    return
                case "/delete":
                    deleteShoe(e.target.dataset.key)
                    return
                case "/buy":
                    buyShoe(e.target.dataset.key)
                    return
            }
            router(path)
        }
    })
    router("/")
})()