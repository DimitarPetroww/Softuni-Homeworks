export default async function () {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        team: await this.load("./templates/catalog/team.hbs")
    }
    const data = Object.assign({}, this.app.userData)
    data.teams = []

    const r = await (await fetch("https://routing-2c6e9-default-rtdb.firebaseio.com/teams.json")).json()
    if(r) {
        Object.entries(r).forEach(([key, team]) => {
            if (team.members.find(x => x.username === data.email)) {
                data.hasTeam = true
            }
            team.teamId = key
            data.teams.push(team)
        })
    }
    data.hasNoTeam = !data.hasTeam
    this.partial("./templates/catalog/teamCatalog.hbs", data)
}