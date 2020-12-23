function loadRepos() {
	const httpRequest=new XMLHttpRequest() 
	const user=document.getElementById("username")
	const url=`https://api.github.com/users/${user.value}/repos`
	const repositories=document.getElementById("repos")
 
	httpRequest.addEventListener("loadend", function() {
	   let repos=JSON.parse(this.responseText)
	   repositories.innerHTML=repos.map(x=>`<li><a href="${x.html_url}"target="_blank">${x.name}</a></li>`).join("")
	})
	httpRequest.open("GET", url)
	httpRequest.send()
}