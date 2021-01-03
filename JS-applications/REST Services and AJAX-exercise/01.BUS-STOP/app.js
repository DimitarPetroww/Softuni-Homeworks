function getInfo() {
    let url = `https://judgetests.firebaseio.com/businfo/${document.getElementById("stopId").value}.json`
    let [stopNameElement, busesElement] = document.querySelectorAll("#stopName, #buses")
    stopNameElement.textContent = ''
    busesElement.textContent = ''
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let { buses, name } = json
            stopNameElement.textContent = name
            busesElement.innerHTML=Object.entries(buses)
                .map(([id, time]) => `<li>Bus ${id} arrives in ${time}</li>`)
                .join("")
        })
        .catch((e) => {
            stopNameElement.textContent = `Error`
        })
    document.getElementById("stopId").value = ""
}