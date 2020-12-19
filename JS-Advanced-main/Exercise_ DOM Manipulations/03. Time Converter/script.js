function attachEventsListeners() {
    let daysBtn=document.getElementById("daysBtn")
    let hoursBtn=document.getElementById("hoursBtn")
    let minsBtn=document.getElementById("minutesBtn")
    let secondsBtn=document.getElementById("secondsBtn")

    let days=document.getElementById("days")
    let hours=document.getElementById("hours")
    let minutes=document.getElementById("minutes")
    let secs=document.getElementById("seconds")
    
    daysBtn.addEventListener("click" , () => {
        hours.value=days.value * 24
        minutes.value=days.value * 1440
        secs.value=days.value * 86400
    })
    hoursBtn.addEventListener("click" , () => {
        days.value=hours.value / 24
        minutes.value=hours.value * 60
        secs.value=minutes.value * 60
    })
    minsBtn.addEventListener("click" , () => {
        hours.value=minutes.value / 60
        days.value=hours.value / 24
        secs.value=minutes.value * 60
    })
    secondsBtn.addEventListener("click" , () => {
        minutes.value=secs.value / 60
        hours.value=minutes.value / 60
        days.value=hours.value / 24
    })
}
