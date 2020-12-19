function lockedProfile() {
    Array.from(document.getElementsByTagName("button")).map((x)=> x.addEventListener("click", (e) => {
        let parent=e.target.parentElement
        let unlock=parent.querySelectorAll("input")[1].checked
        let hiddenDiv=parent.querySelector("div")
        if(unlock) {
            if(e.target.textContent==="Show more") {
                hiddenDiv.style.display="block"
                e.target.textContent="Hide it"
            }else if(e.target.textContent==="Hide it") {
                hiddenDiv.style.display="none"
                e.target.textContent="Show more"
            }
        }
    }))
}
