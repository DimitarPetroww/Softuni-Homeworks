function createArticle() {
	let titleElement = document.getElementById("createTitle")
	let contentElement = document.getElementById("createContent")

	let text = document.createElement("h3")
	text.innerHTML = titleElement.value
	let content = document.createElement("p")
	content.innerHTML = contentElement.value
	if (titleElement.value !== "" && contentElement.value !== "") {
		let article=document.createElement("article")
		article.appendChild(text)
		article.appendChild(content)
		let articleSelectionElement=document.querySelector("#articles")
		articleSelectionElement.appendChild(article)
	}
	titleElement.value=""
	contentElement.value=""
}
