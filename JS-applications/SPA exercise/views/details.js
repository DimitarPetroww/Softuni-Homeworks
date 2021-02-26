function details(shoe) {
    const boughtppl = shoe.peopleBought || []
    const isBought = boughtppl.includes(localStorage.getItem("user"))
    const element = isBought ? `<span>You bought it</span>` : `<a href="/buy" data-key=${shoe.id}>Buy</a>`
    return ` <div class="offer-details">
            <h1>${shoe.name}</h1>
            <div class="info">
                <img src="${shoe.imageURL}"
                    alt="">
                <div class="description">${shoe.description}
                    <br>
                    <br>
                    <p class="price">$${shoe.price}</p>
                </div>
            </div>
            <div class="actions">
                ${shoe.creator === localStorage.getItem("user")
            ?
            `<a href="/edit/${shoe.id}">Edit</a><a href="/delete" data-key=${shoe.id}>Delete</a>`
            :
            element} 
            </div>
        </div>`
}