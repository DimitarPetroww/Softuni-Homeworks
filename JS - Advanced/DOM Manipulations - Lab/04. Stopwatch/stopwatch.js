function stopwatch() {
    let time = document.getElementById('time')
    let start = document.getElementById('startBtn')
    let end = document.getElementById('stopBtn')
    let stop;
    
    start.addEventListener('click', () => {
        time.textContent = `00:00`
        let [min,sec] = [0,0]
    stop = setInterval(() => {
            min = Number(min)
            sec = Number(sec)
            sec++;
            if(sec > 59){
                min ++;
                sec = 0;
            }
            sec < 10 ? sec = `0${sec}` : sec
            min < 10 ? min = `0${min}` : min
            time.textContent = `${min}:${sec}`
        }, 1000)
        start.disabled = true
        end.disabled = false
    })
    end.addEventListener('click', (e) => {
        e.target.disabled = true
        start.disabled = false
        clearInterval(stop)
    })
}