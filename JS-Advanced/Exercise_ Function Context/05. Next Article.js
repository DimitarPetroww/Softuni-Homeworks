function getArticleGenerator(articles) {
    function showNext() {
        let article=document.createElement("article")
        let content=articles.shift()
        if(content === undefined) {
            return
        }
        article.innerHTML=content
        document.getElementById("content").appendChild(article)
    }
    return showNext
}
