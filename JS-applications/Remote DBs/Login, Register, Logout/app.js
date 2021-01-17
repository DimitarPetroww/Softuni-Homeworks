document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault()
    const [email, password] = document.querySelectorAll("input")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)

})
document.querySelector(".signupbtn").addEventListener("click", (e) => {
    e.preventDefault()
    const [email, password, repeatPassword] = document.querySelectorAll(".register")
    if (email.value !== "" && password.value !== "" && repeatPassword.value !== "" && password.value === repeatPassword.value) {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    }
})
document.querySelector("#logout").addEventListener("click", (e) => {
    firebase.auth().signOut()
})