fetch("./template.hbs")
.then(r=>r.text())
.then(handlebarsView => {
    document.getElementById("allCats").innerHTML = Handlebars.compile(handlebarsView)({cats})
})