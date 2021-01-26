document.querySelector("#allCats").addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        const info=e.target.parentElement.querySelector("div")
        info.style.display = info.style.display !== "block" ? "block" : "none"
    } 
})