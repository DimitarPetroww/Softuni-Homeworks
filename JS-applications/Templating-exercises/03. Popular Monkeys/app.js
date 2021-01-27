document.querySelector(".monkeys").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return
    
    const info=e.target.parentElement.querySelector("p")
    info.style.display = info.style.display !== "block" ? "block" : "none"
})