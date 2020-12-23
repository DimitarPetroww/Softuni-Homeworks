function loadRepos() {
	const user=document.getElementById("username")
	const url=`https://api.github.com/users/${user.value}/repos`
	const repositories=document.getElementById("repos")
 
	fetch(url)
	.then(response => response.json())
	.then(function(repos) {
		repositories.innerHTML=repos.map(x=>`<li><a href="${x.html_url}"target="_blank">${x.name}</a></li>`).join("")
	})
	.catch(function() {
		repositories.innerHTML=`<li>Error</li>`
	})
}