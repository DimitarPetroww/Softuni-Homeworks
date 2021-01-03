function solve() {
    let url = `https://judgetests.firebaseio.com/schedule/depot.json`
    const [departBtn, arriveBtn] = document.querySelectorAll("#depart, #arrive")
    let info = document.getElementById("info").firstChild
    let stopName;
    function depart() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                info.textContent = `Next stop ${data.name}`
                url = `https://judgetests.firebaseio.com/schedule/${data.next}.json`
                stopName = data.name
                departBtn.setAttribute("disabled", true)
                arriveBtn.removeAttribute("disabled")
            })
            .catch(() => {
                info.textContent = `Error`
                departBtn.setAttribute("disabled", true)
                arriveBtn.setAttribute("disabled", true)
            })
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`
        arriveBtn.setAttribute("disabled", true)
        departBtn.removeAttribute("disabled")
    }

    return {
        depart,
        arrive
    };
}

let result = solve();