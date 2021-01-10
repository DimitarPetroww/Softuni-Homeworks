function stopwatch() {
    let time=document.getElementById("time")
    let startBtn=document.getElementById("startBtn")
    let stopBtn=document.getElementById("stopBtn")
    let interval;
    startBtn.addEventListener("click" , (e) => {
        time.textContent=`00:00`
        interval=setInterval(function() {
            let [mins , secs]=time.textContent.split(":")
            startBtn.setAttribute("disabled" , true)
            stopBtn.removeAttribute("disabled")
            mins=Number(mins)
            secs=Number(secs)
            secs++
            if(secs > 59) {
                mins++
                secs=0
            }
            secs < 10? secs=`0${secs}` : secs
            mins < 10? mins=`0${mins}` : mins
            time.textContent=`${mins}:${secs}`
        } , 1000)
    })
    stopBtn.addEventListener("click" , (e)=> {
        e.target.setAttribute("disabled" , true)
        startBtn.removeAttribute("disabled")
        clearInterval(interval)
    })
}