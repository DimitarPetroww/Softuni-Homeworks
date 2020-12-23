function loadRepos() {
   const httpRequest=new XMLHttpRequest() 
   const url=`https://api.github.com/users/DimitarPetroww/repos`
   const result=document.getElementById("res")

   httpRequest.addEventListener("loadend", function() {
      let repos=JSON.parse(this.responseText)
      result.innerHTML=repos.map(x=> `<p><a href="${x.html_url}" target="_blank">${x.name}</a></p>`).join("")
   })
   httpRequest.open("GET", url)
   httpRequest.send()
}