function solve() {
   let input=document.getElementById("searchField")
   
   document.getElementById("searchBtn").addEventListener("click" , () => {
       [...document.querySelectorAll("tbody > tr")].forEach(x=> {
          if(x.textContent.includes(input.value)) {
             x.setAttribute("class" , "select")
          }else {
             x.removeAttribute("class")
          }
       })
       input.value=""
   })
}
