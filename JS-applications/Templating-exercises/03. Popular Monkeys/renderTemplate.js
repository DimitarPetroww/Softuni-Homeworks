fetch("./monkeysTemplate.hbs")
.then(r=> r.text())
.then(HandlebarsView=> {
    document.querySelector(".monkeys").innerHTML=Handlebars.compile(HandlebarsView)({monkeys})
})