function loadCommits() {
    (async (username, repository) => {
        let response=await fetch(`https://api.github.com/repos/${username.value}/${repository.value}/commits`)
        if(response.status !== 200) {
            throw `Error: ${response.status} (${response.statusText})`
        }
        return await response.json()
    })(...document.querySelectorAll("#username, #repo"))
    .then(data => {
        document.getElementById("commits").innerHTML = data.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join("")
    })
    .catch(err => {
        document.getElementById("commits").innerHTML = `<li>${err}</li>`
    })
}