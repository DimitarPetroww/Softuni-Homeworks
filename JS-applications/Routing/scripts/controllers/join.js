export default async function () {
    const { id } = this.params
    const team = await (await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`)).json()
    team.members.push({username: this.app.userData.email})
    
    await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(team)
    })
    this.app.userData.hasTeam = true
    
    this.redirect("#/catalog")
}