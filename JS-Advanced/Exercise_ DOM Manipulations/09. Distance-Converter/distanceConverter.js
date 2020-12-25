function attachEventsListeners() {
    let input=document.getElementById("inputUnits")
    let output=document.getElementById("outputUnits")
    document.getElementById("convert").addEventListener("click" ,()=> {
        document.getElementById("outputDistance").value=convert(document.getElementById("inputDistance").value)
    })


    function convert(value) {
        if(input.value==="km") {
            value=value * 1000
        }else if(input.value==="m") {
            value=value
        }else if(input.value==="cm") {
            value=value * 0.01
        }else if(input.value==="mm") {
            value=value * 0.001
        }else if(input.value==="mi") {
            value=value * 1609.34
        }else if(input.value==="yrd") {
            value=value * 0.9144
        }else if(input.value==="ft") {
            value=value * 0.3048
        }else if(input.value==="in") {
            value=value * 0.0254
        }

        switch(output.value) {
            case "km" :
                return value / 1000
            case "m" :
                return value
            case "cm" : 
                return value * 100
            case "mm" : 
                return value * 1000
            case "mi" :
                return value / 1609.34
            case "yrd":
                return value / 0.9144
            case "ft":
                return value / 0.3048
            case "in" :
                return value / 0.0254
        }
    }
}