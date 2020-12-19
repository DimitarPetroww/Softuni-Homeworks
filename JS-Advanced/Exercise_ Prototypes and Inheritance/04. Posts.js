function solve() {
    class Post {
        constructor(title, content) {
            Object.assign(this, { title, content })
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`

        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            Object.assign(this, { likes, dislikes, comments: [] })
        }
        addComment(comment) {
            this.comments.push(comment)
        }
        toString() {
            let string= [
                super.toString(),
                `Rating: ${this.likes - this.dislikes}`
            ]
            if (this.comments.length > 0) {
                string.push("Comments:")
                this.comments.forEach(x => {
                    string.push(` * ${x}`)
                })
            }
            return string.join("\n")
        }
    }


    class BlogPost extends Post { 
        constructor(title , content , views) {
            super(title , content)
            this.views=views
        }
        view() {
            this.views++
            return this
        }
        toString() {
            return [
                super.toString(),
                `Views: ${this.views}`
            ].join("\n")
        }
    }
    return { Post, SocialMediaPost, BlogPost }
}
