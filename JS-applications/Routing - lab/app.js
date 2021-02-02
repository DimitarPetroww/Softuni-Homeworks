export default (() => {
    const addFurniture = async (body) => {
        return await fetch("https://routing-2c6e9-default-rtdb.firebaseio.com/furnitures.json", {
            method: "POST",
            body: JSON.stringify(body)
        })
    }
    const loadFurnitures = async () => {
        return await (await fetch("https://routing-2c6e9-default-rtdb.firebaseio.com/furnitures.json")).json()
    }

    const createFurniture = (e) => {
        e.preventDefault()
        const [make, model, year, description, price, image, material] = ["new-make", "new-model", "new-year", "new-description", "new-price", "new-image", "new-material"]
            .map(id => document.getElementById(id))
            .map(e => e.value.trim())
            .map(x => isNaN(x) ? x : Number(x))

        if (
            (make.length < 4 || model.length < 4)
            || (year > 2050 || year < 1950)
            || description.length <= 10
            || price < 0
            || image === ""
        ) { console.log("da") }

        addFurniture({ make, image, year, description, material, model, price })
            .then(() => {
                loadFurnitures()
                    .then((data) => {
                        fetch("./templates/allFurnitures.hbs")
                            .then(r => r.text())
                            .then(templateView => {
                                const template = Handlebars.compile(templateView)
                                document.body.innerHTML = template(data)
                            })
                    })
            })


    }

    document.querySelector("input[type='submit']").addEventListener("click", createFurniture)

})()