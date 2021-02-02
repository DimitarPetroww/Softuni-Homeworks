export default (() => {
    const createFurniture = (e) => {
        e.preventDefault()
        const [make, model, year, description, price, image, material] = ["new-make", "new-model", "new-year", "new-description", "new-price", "new-image", "new-material"]
            .map(id => document.getElementById(id))
            .map(e => e.value.trim())
            .map(x=> isNaN(x) ? x : Number(x))

        if (
            (make.length < 4 || model.length < 4)
            ||(year > 2050 || year < 1950)
            || description.length <= 10
            || price < 0
            || material === ""
        ) { console.log("da")}


    }

    document.querySelector("input[type='submit']").addEventListener("click", createFurniture)

})()