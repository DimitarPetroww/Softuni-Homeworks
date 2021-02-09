export default async function () {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        teamMember: await this.load("./templates/catalog/teamMember.hbs"),
        teamControls: await this.load("./templates/catalog/teamControls.hbs"),
    }
    let { id } = this.params
    const team = await (await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`)).json()
    if(team.members.find(x=> x.username === this.app.userData.email)) team.isOnTeam = true
    if(localStorage.getItem("idAuthor") === id) this.app.userData.isAuthor = true
    team.teamId = id
    Object.assign(team, this.app.userData)
    this.partial("./templates/catalog/details.hbs", team)
}