export default async function () {

    const {id, name, comment} = this.params
    const body = {name, comment}
    await fetch(`https://routing-2c6e9-default-rtdb.firebaseio.com/teams/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(body)
    })
    this.redirect("#/catalog")
}