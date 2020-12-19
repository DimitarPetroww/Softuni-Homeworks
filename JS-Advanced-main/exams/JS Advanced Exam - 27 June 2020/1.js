function solve() {
    let [nameEl, ageEl, kindEl, ownerEl] = document.querySelectorAll("input")
    let addBtn = document.getElementsByTagName("button")[0]
    let adoptionField = document.querySelector("#adoption > ul")
    let adoptedField = document.querySelector("#adopted > ul")
    addBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let [name, age, kind, owner] = [nameEl.value, ageEl.value, kindEl.value, ownerEl.value]
        if (name  && age && kind && owner) {
            if(Number(age)) {
                let liAdoption = document.createElement("li")
                let p = document.createElement("p")
                let spanOld = document.createElement("span")
                let contactBtn = document.createElement("button")
                p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`
                liAdoption.appendChild(p)
                spanOld.innerHTML = `Owner: ${owner}`
                liAdoption.appendChild(spanOld)
                contactBtn.textContent = "Contact with owner"
                contactBtn.addEventListener("click", function (e) {
                    let parent=e.currentTarget.parentElement
                    e.currentTarget.remove()
                    let div = document.createElement("div")
                    let inputTake = document.createElement("input")
                    inputTake.setAttribute("placeholder", "Enter your names")
                    div.appendChild(inputTake)
                    let takeBtn = document.createElement("button")
                    takeBtn.textContent = "Yes! I take it!"
                    takeBtn.addEventListener("click", function (e) {
                        if (inputTake.value) {
                            e.currentTarget.parentElement.parentElement.remove()
                            let liAdopted = document.createElement("li")
                            let p2 = document.createElement("p")
                            p2.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`
                            liAdopted.appendChild(p2)
                            let spanNew = document.createElement("span")
                            spanNew.textContent = `New Owner: ${inputTake.value}`
                            liAdopted.appendChild(spanNew)
                            let checkBtn=document.createElement("button")
                            checkBtn.textContent="Checked"
                            checkBtn.addEventListener("click" , (e) => {
                                e.currentTarget.parentElement.remove()
                            })
                            liAdopted.appendChild(checkBtn)
                            adoptedField.appendChild(liAdopted)
                        }
                    })
                    div.appendChild(takeBtn)
                    parent.appendChild(div)
                })
                liAdoption.appendChild(contactBtn)
                adoptionField.appendChild(liAdoption)
            }
        }
        nameEl.value = ""
        ageEl.value = ""
        kindEl.value = ""
        ownerEl.value = ""
    })
}
