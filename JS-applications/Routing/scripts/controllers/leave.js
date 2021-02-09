export default async function () {
    const { id } = this.params
    const team = await (await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`)).json()
    team.members = team.members.filter(x => x.username !== this.app.userData.email)

    if (team.members.length === 0) {
        await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`, {
            method: "DELETE",
        }).then(() => {
            this.app.userData.hasTeam = false
            this.app.userData.isAuthor = false
            this.app.userData.teamId = undefined
            this.redirect("#/catalog")
        })
    } else {
        await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`, {
            method: "PUT",
            body: JSON.stringify(team)
        }).then(() => {
            this.app.userData.hasTeam = false
            this.app.userData.isAuthor = false
            this.app.userData.teamId = undefined
            this.redirect("#/catalog")
        })
    }
}