const elemenets = {
    "input": () => document.getElementById("towns"),
    "button": () => document.getElementById("btnLoadTowns"),
    "div": () => document.getElementById("root")
}
elemenets.button().addEventListener("click", (e) => {
    e.preventDefault()
    const { value } = elemenets.input()
    appendTowns(value.split(", "))
})
getTemplate = async () => await (await fetch("./template.hbs")).text()

function appendTowns(towns) {
    getTemplate().then(handlebarsView => {
        elemenets.div().innerHTML = Handlebars.compile(handlebarsView)({ towns })
    })
}