function solve() {
    let linkElements = document.querySelectorAll('.link-1 a');

    [...linkElements].forEach(x => {
        x.addEventListener('click', linkClick);
    })

    function linkClick(e) {
        let paragraphElement = e.currentTarget.nextElementSibling;
        let visited = Number(paragraphElement.innerText.split(' ')[1]);
        visited++;
        paragraphElement.innerText = `visited ${visited} times`
        console.log(visited);
    }
}