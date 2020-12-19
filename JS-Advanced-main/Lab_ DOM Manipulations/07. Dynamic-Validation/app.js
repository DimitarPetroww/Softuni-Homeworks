function validate() {
    let inputEmail=document.getElementById("email")

    let pattern=/[a-z]+@[a-z]+.[a-z]+/
    inputEmail.addEventListener("change" , (e) =>{
        if(pattern.test(e.target.value)) {
            e.target.classList.remove("error")
        }else {
            e.target.classList.add("error")
        }
    })
}
