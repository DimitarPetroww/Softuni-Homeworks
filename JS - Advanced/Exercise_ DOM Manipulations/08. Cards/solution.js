function solve() {
   let card1;
   let card2;
   Array.from(document.getElementsByTagName("img")).map(x => x.addEventListener("click", (e) => {
      if(!card1 && !card2) {
         document.getElementsByTagName("span")[0].innerText = ""
         document.getElementsByTagName("span")[2].innerText = ""
      }
      e.target.setAttribute("src", "images/whiteCard.jpg")
      if (e.target.parentElement.id === "player1Div") {
         card1 = e.target
         document.getElementsByTagName("span")[0].innerText = card1.name
      } else {
         card2 = e.target
         document.getElementsByTagName("span")[2].innerText = card2.name
      }
      if (card1 && card2) {
         if (Number(card1.name) > Number(card2.name)) {
            card1.style.border = "2px solid green"
            card2.style.border = "2px solid red"
         } else {
            card2.style.border = "2px solid green"
            card1.style.border = "2px solid red"
         }
         document.getElementById("history").innerHTML += `[${card1.name} vs ${card2.name}] `
         card1=undefined
         card2=undefined
      }
   }))
}