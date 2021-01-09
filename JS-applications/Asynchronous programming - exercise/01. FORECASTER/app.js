function attachEvents() {
    const [input, btn] = document.querySelectorAll("#location, #submit")
    const symbolsMap = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    }

    btn.addEventListener("click", () => {
        fetch("https://judgetests.firebaseio.com/locations.json")
            .then(response => response.json())
            .then((data) => {
                const { code } = data.find(o => o.name === input.value)
                const today = fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
                    .then(response => response.json())
                const upcoming = fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
                    .then(response => response.json())

                Promise.all([today, upcoming])
                    .then(([today, upcoming]) => {
                        document.getElementById("current").innerHTML = renderToday(today)
                        document.getElementById("upcoming").innerHTML = renderUpcoming(upcoming)

                        document.getElementById("forecast").style.display = "block"
                        input.value = ""
                    })
            }).catch(() => {
                input.value = "Error"
                input.addEventListener("focus", () => {
                    input.value = ""
                }, false)
                document.getElementById("forecast").style.display = "none"
                document.getElementById("current").innerHTML = `<div class="label">Current conditions</div>`
                document.getElementById("upcoming").innerHTML = `<div class="label">Three-day forecast</div>`
            })
    })

    function renderToday(today) {
        return `<div class="label">Current conditions</div>
        <div class="forecasts">
           <span class="condition symbol">${symbolsMap[today.forecast.condition]}</span>
           <span class="condition">
               <span class="forecast-data">${today.name}</span>
               <span class="forecast-data">${today.forecast.low}${symbolsMap.Degrees}/${today.forecast.high}${symbolsMap.Degrees}</span>
               <span class="forecast-data">${today.forecast.condition}</span>
           </span>
        </div>`
    }
    function renderUpcoming(upcoming) {
        return `<div class="label">Three-day forecast</div>
        <div class="forecast-info">
           <span class="upcoming">
              <span class="symbol">${symbolsMap[upcoming.forecast[0].condition]}</span>
              <span class="forecast-data">${upcoming.forecast[0].low}${symbolsMap.Degrees}/${upcoming.forecast[0].high}${symbolsMap.Degrees}</span>
              <span class="forecast-data">${upcoming.forecast[0].condition}</span>
          </span>
          <span class="upcoming">
              <span class="symbol">${symbolsMap[upcoming.forecast[1].condition]}</span>
              <span class="forecast-data">${upcoming.forecast[1].low}${symbolsMap.Degrees}/${upcoming.forecast[1].high}${symbolsMap.Degrees}</span>
              <span class="forecast-data">${upcoming.forecast[1].condition}</span>
          </span>
          <span class="upcoming">
              <span class="symbol">${symbolsMap[upcoming.forecast[2].condition]}</span>
              <span class="forecast-data">${upcoming.forecast[2].low}${symbolsMap.Degrees}/${upcoming.forecast[2].high}${symbolsMap.Degrees}</span>
              <span class="forecast-data">${upcoming.forecast[2].condition}</span>
          </span>
        </div>`
    }
}

attachEvents();