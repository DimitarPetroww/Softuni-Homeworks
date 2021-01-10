function attachEventsListeners() {
    let input = document.getElementById("inputUnits")
    let output = document.getElementById("outputUnits")
    document.getElementById("convert").addEventListener("click", () => {
        document.getElementById("outputDistance").value = convert(document.getElementById("inputDistance").value)
    })


    function convert(value) {
        const inputConverter = {
            "km": (v) => v *= 1000,
            "m": (v) => v,
            "cm": (v) => v *= 0.01,
            "mm": (v) => v *= 0.001,
            "mi": (v) => v *= 1609.34,
            "yrd": (v) => v *= 0.9144,
            "ft": (v) => v *= 0.3048,
            "in": (v) => v *= 0.0254
        }
        const outputConverter = {
            "km": (v) => v / 1000,
            "m": (v) => v,
            "cm": (v) => v * 100,
            "mm": (v) => v * 1000,
            "mi": (v) => v / 1609.34,
            "yrd": (v) => v / 0.9144,
            "ft": (v) => v / 0.3048,
            "in": (v) => v / 0.0254
        }
        return outputConverter[output.value](inputConverter[input.value](value))
    }
}