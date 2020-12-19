function solve() {
   document.querySelector("tbody").addEventListener("click", (e) => {
      if (e.target.tagName === "TD") {
         let parent=e.target.parentElement
         if (!Array.from(document.querySelector("tbody").children).some(x => x.hasAttribute("style"))) {
            if (!parent.style.backgroundColor) {
               parent.style.backgroundColor = "#413f5e"
            } else {
               parent.removeAttribute("style")
            }
         } else {
            if (parent.style.backgroundColor) {
               parent.removeAttribute("style")
            } else {
               Array.from(document.querySelector("tbody").children).map(x => x.removeAttribute("style"))
               parent.style.backgroundColor = "#413f5e"
            }
         }
      }
   })
}
