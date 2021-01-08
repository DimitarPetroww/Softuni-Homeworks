function attachEvents() {
    async function loadPosts () {
        return await (await fetch("https://blog-apps-c12bf.firebaseio.com/posts.json")).json()
    }
    async function viewPost (id) {
        return await (await fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${id}.json`)).json()
    }
    async function getComments() {
        return await (await fetch(`https://blog-apps-c12bf.firebaseio.com/comments.json`)).json()
    }

    let [loadBtn, viewBtn]=document.querySelectorAll("#btnLoadPosts, #btnViewPost")
    let posts=document.getElementById("posts")
    loadBtn.addEventListener("click", () => {
        loadPosts()
        .then(data => {
            posts.innerHTML=Object.entries(data).map(x=> `<option value="${x[0]}">${x[1].title}</option>`).join("")
        })
    })
    viewBtn.addEventListener("click", viewPosts)
    

    function viewPosts() {
        viewPost(posts.value)
        .then(data => {
            document.getElementById("post-title").innerHTML=data.title
            document.getElementById("post-body").innerHTML=data.body
            getComments()
            .then((res) => {
                document.getElementById("post-comments").innerHTML=Object.values(res)
                .reduce((a , b) => {
                    if(b.postId===data.id) {
                        a.push(b.text)
                    }
                    return a
                }, [])
                .join("")
            })
        }).catch(() => {
            document.getElementById("post-title").innerHTML=`No posts found!`
        })
    }
}
attachEvents();