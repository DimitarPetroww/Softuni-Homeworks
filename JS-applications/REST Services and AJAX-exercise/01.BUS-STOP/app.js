function getInfo() {
    let url = `https://judgetests.firebaseio.com/businfo/${document.getElementById("stopId").value}.json`
    let [stopNameElement, busesElement] = document.querySelectorAll("#stopName, #buses")
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let { buses, name } = json
            stopNameElement.textContent = name
            Object.entries(buses)
                .map(([id, time]) => {
                    let li=document.createElement("li")
                    li.innerHTML=`Bus ${id} arrives in ${time}`
                    return li
                })
                .forEach(li => busesElement.appendChild(li))
        })
        .catch(err => {
            stopNameElement.textContent = `Error`
        })
}