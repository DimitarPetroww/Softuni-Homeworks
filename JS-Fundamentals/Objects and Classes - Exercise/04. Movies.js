function solve(arr) {
    let result = []
    function date(event) {
        let tokens = event.split(" onDate ")
        let date = tokens.pop()
        const film = result.find(o => o.name === tokens.toString())
        if (film) {
            film.date = date
        }
    }
    function directedBy(event) {
        let tokens = event.split(" directedBy ")
        let director = tokens.pop()
        movieName = tokens.join(" ")
        const film = result.find(o => o.name === movieName)
        if (film) {
            film.director = director
        }
    }
    for (let command of arr) {
        if (command.includes("addMovie")) {
            tokens = command.split(" ")
            movieName = tokens.splice(1).join(" ");
            result.push({ name: movieName })
        } else if (command.includes('onDate')) {
            date(command)
        } else if (command.includes("directedBy")) {
            directedBy(command)
        }
    }
    let filteredResult = result.filter(movie => Object.keys(movie).length === 3)
    for (let obj of filteredResult) {
        console.log(JSON.stringify(obj));
    }
}
