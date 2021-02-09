export default async function () {
    const team = Object.assign({ members: [{ username: this.app.userData.email }] }, this.params)
    await fetch("https://routing-2c6e9-default-rtdb.firebaseio.com/teams.json", {
        method: "POST",
        body: JSON.stringify(team)
    })
    this.app.userData.hasTeam = true
    const response = await (await fetch("https://routing-2c6e9-default-rtdb.firebaseio.com/teams.json")).json()
    let [id] = Object.entries(response).find(([_, team]) => team.members.find(member => member.username === this.app.userData.email))
    localStorage.setItem("idAuthor", id)

    this.redirect("#/catalog")
}