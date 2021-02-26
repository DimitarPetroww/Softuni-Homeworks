function home(data) {
    if (!data.logged) {
        return `<div class="container">
        <div class="about-us">
            <div>
                <img src="../public/shoes.jpg" alt="">
                <img src="../public/shoes2.jpg" alt="">
            </div>
        <p>
    <a href="/register">Register Now</a> and Try it!
        </p> 
        </div>
    </div>`
    }
    return `<div class="shoes">
    ${data.shoes.length > 0 ? data.shoes.map(x => {
        return `<div class="shoe">
             <img
                 src="${x.imageURL}">
                 <h3>${x.name}</h3>
                 <a href="/details/${x.id}">Buy it for $${x.price}</a>
         </div>`
     }).join(""): `<h1>No shoes to display. Be the first to create new offer...`}
    </div>`
}