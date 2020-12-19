function attachGradientEvents() {
    let gradient=document.getElementById("gradient")
    gradient.addEventListener("mousemove" , e => {
        let width=e.target.clientWidth
        let percent=`${Math.floor((e.offsetX / width) * 100)}%`
        document.getElementById("result").innerText=percent
    })
}
