export default async function () {
    this.partials = {
        header: await this.load("./templates/common/header.hbs"),
        footer: await this.load("./templates/common/footer.hbs"),
        editForm: await this.load("./templates/edit/editForm.hbs")
    }
    const { id } = this.params
    const data = await (await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`)).json()
    Object.assign(data, this.app.userData)
    data.teamId = id
    this.partial("./templates/edit/editPage.hbs", data)
}