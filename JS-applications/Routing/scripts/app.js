import loadPartials from './loadPartials.js';
export default(() => {
    
    const app = Sammy("#main", function() {
        this.use("Handlebars", "hbs")

        this.get("/home", function(e) {
            loadPartials(e)
            .then(function() {
                this.partial("./templates/home/home.hbs")
            })
        })
        this.get("/about", function(e) {
            loadPartials(e)
            .then(function() {
                this.partial("./templates/about/about.hbs")
            })
        })
    })

    app.run("/home")
})()

