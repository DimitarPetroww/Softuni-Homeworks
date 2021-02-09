export default async function () {
    firebase.auth().signOut()
    this.app.userData.loggedIn = false
    this.app.userData.email = undefined
    this.app.userData.hasTeam = false
    this.app.userData.teamId = undefined
    this.app.userData.isAuthor = false
    this.redirect("#/home")
    const info = document.getElementById("infoBox")
    info.textContent = "You logged out succesfully"
    info.style.display = "block"
    setTimeout(function( ) {
        info.style.display = "none"
    }, 2000)
}