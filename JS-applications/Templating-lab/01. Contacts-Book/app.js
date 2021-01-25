const templateView=document.getElementById("template").innerHTML
const contactsTemplate=Handlebars.compile(templateView)
document.getElementById("contacts").innerHTML=contacts.map(x=> contactsTemplate(x)).join("")
document.getElementById("contacts").addEventListener("click", (e) => {
    if(e.target.tagName !== "BUTTON") {
        return
    }
    const details= e.target.parentElement.querySelector(".details")
    details.style.display = details.style.display !== "block" ? "block" : "none"
})