function solve() {
   let button = document.getElementById("send")
   let chatMessage = document.getElementById("chat_input")
   button.addEventListener("click", () => {
      let div = document.createElement("div")
      div.setAttribute("class", "message my-message")
      div.innerText += chatMessage.value
      document.getElementById("chat_messages").appendChild(div)
      chatMessage.value=""
   })
}
