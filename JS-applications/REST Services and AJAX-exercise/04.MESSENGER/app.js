function attachEvents() {
    let [submit, refresh]=document.querySelectorAll("#submit, #refresh")
    let [author, content]=document.querySelectorAll("#author, #content")
    
    submit.addEventListener("click", (e) => {
        if(author.value==="" || content.value==="") {
            return
        }
        fetch("https://rest-messanger.firebaseio.com/messanger.json", {
            method: "POST",
            body: JSON.stringify({ "author": author.value, "content": content.value })
        })
        author.value=""
        content.value=""
    })
    refresh.addEventListener("click", () => {
        fetch("https://rest-messanger.firebaseio.com/messanger.json")
        .then((response)=> response.json())
        .then((data)=> {
            document.getElementById("messages").textContent=Object.values(data)
            .reduce((a , {author, content}) => a+=`${author}: ${content}\n` , "")
        })
    })
}

attachEvents();