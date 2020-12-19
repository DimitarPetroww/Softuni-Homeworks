function solve(steps , stepsLength , speed) {

    let metersDistance=steps * stepsLength
    //speed=km/h -> m/s
    //1h=3600s 1km=1000m 
    let speedMetersInSec=speed / 3.6
    let time=metersDistance / speedMetersInSec + Math.floor(metersDistance / 500) * 60
    let hours=Math.floor(time/3600)
    let mins=Math.floor(time/60)
    let secs=Math.round(time%60)
    console.log(`${hours < 10? 0 : ""}${hours}:${mins <10 ? 0 : ""}${mins}:${secs < 10 ? 0 : ""}${secs}`);
} 
