function edit(shoe) {
    return `<h1>Edit Offer</h1>
        <p class="message"></p>
        <form>
            <div>
                <input type="text" placeholder="${shoe.name}">
            </div>
            <div>
                <input type="text" placeholder="${shoe.price}">
            </div>
            <div>
                <input type="text" placeholder="${shoe.imageURL}">
            </div>
            <div>
                <textarea placeholder="${shoe.description}"></textarea>
            </div>
            <div>
                <input type="text" placeholder="${shoe.brand}">
            </div>
            <div>
                <button onclick="editShoe(event)" data-key="${shoe.id}">Edit</button>
            </div>
        </form>`
}